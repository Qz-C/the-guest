import { PrismaClient } from ".prisma/client";

import {
    Request,
    Response
} from "express";
import sendEmail from "../../services/emails/sendEmail";
import { errorMessage } from "../../util/validations";
import deleteSpecification from "../accounts/helpers/deleteSpecification";
import generateAccount from "../accounts/helpers/generateAccount";
import { emailListParser } from "../../util/parser";


const prisma = new PrismaClient();

export const createVisit = (req: Request, res: Response) => {

    let facilityId = undefined;

    if (req.authAccount !== undefined && req.authAccount.role === "FACILITY")
        facilityId = req.authAccount.id;
    else
        facilityId = req.body.facilityId;

    const {
        visitors,
        startTime,
        finishTime,
        title,
        description
    }: {
        visitors: string,
        startTime: Date,
        finishTime: Date,
        title: string,
        description: string,
    } = req.body;


    if (!facilityId || !visitors || !startTime || !finishTime || !title || !description)
        return res.status(400).send(errorMessage("Missing required fields"));

    if (isNaN(facilityId))
        return res.status(400).send(errorMessage("Invalid Id"));

    if (finishTime <= new Date() || startTime <= new Date())
        return res.status(400).send(errorMessage("The date must be a future date"));

    if (startTime > finishTime)
        return res.status(400).send(errorMessage("The start time must previous to the end time"));

    prisma.visit.create({
        data: {
            facilityId: facilityId,
            startTime: startTime,
            finishTime: finishTime,
            title: title,
            description: description
        }
    }).then(async (visit) => {

        emailListParser(visitors).forEach((email: string) => {
            prisma.account.findUnique({
                where: {
                    email: email
                }
            }).then(async (registeredAccount) => {
                if (registeredAccount?.id) {
                    await prisma.visitor.create({
                        data: {
                            email: registeredAccount.email,
                            visitId: visit.id
                        }
                    })
                    console.log({ email: registeredAccount.email, invited: true })
                } else {
                    generateAccount(email, "USER")
                        .then((newAccount) => {
                            sendEmail("null", newAccount.email, newAccount.password)
                                .then(async () => {
                                    await prisma.visitor.create({
                                        data: {
                                            email: newAccount.email,
                                            visitId: visit.id
                                        }
                                    })
                                    console.log({ email: email, invited: true })
                                })
                                .catch((error) => {
                                    console.error(error);
                                    prisma.account.delete({
                                        where: {
                                            email: email
                                        }
                                    }).then(async (account) => {
                                        await deleteSpecification("USER", account.id)
                                        console.error({ email: email, invited: false })
                                    }).catch((error) => {
                                        console.error(error);
                                    })
                                })

                        }).catch((error) => {
                            console.error({ email: email, invited: false })
                            console.error(error);
                        })
                }
            }).catch((error) => {
                console.error(error);
                console.error({ email: email, invited: false })
            })
        })

        return res.status(201).send(visit)

    }).catch((error) => {
        console.error(error)
        return res.status(500).send(errorMessage("Oops! Something went wrong!"));
    })
}