import { PrismaClient } from ".prisma/client";

import {
    Request,
    Response
} from "express";

import {
    emailValidator,
    errorMessage,
    roleValidator,
} from '../../util/validations';

import generateAccount from './helpers/generateAccount'

import sendEmail from "../../services/emails/sendEmail";

const prisma = new PrismaClient();

const create = (req: Request, res: Response) => {

    const { email, role }: any = req.body;

    if (!email || !role)
        return res.status(400).send("Missing required fields")

    if (!emailValidator(email))
        return res.status(400).send(errorMessage("Invalid Email"));

    if (!roleValidator(role))
        return res.status(400).send(errorMessage("Invalid Role"));

    generateAccount(email, role)
        .then((account) => {
            sendEmail("null", account.email, account.password)
                .then((result) => {
                    return res.status(201).send(account);
                })
                .catch((error) => {
                    console.error(error);
                    prisma.account.delete({
                        where: {
                            email: email
                        }
                    }).then(() => {
                        return res.status(500).send(errorMessage("Oops! Something went wrong!"))
                    })
                })
        }).catch((error) => {
            if (error.code === "P2002" && error.meta.target == "email_unique")
                return res.status(400).send(errorMessage("The email is already in use"));
            else
                console.error(error)
                return res.status(500).send(errorMessage("Oops! Something went wrong!"));
        });
}
export default create;