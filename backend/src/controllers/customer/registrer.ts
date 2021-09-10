import { PrismaClient } from ".prisma/client";

import {
    Request,
    Response
} from "express";
import { generateJWTToken } from "../../util/security";

import {
    emailValidator,
    errorMessage,
    passwordValidator,
} from '../../util/validations';

import generateAccount from '../accounts/helpers/generateAccount';

const prisma = new PrismaClient();

const ONE_DAY_MS = 86400000;

const create = (req: Request, res: Response) => {

    const { email, name, password }: any = req.body;

    if (!email || !name || !password)
        return res.status(400).send("Missing required fields")

    if (!emailValidator(email))
        return res.status(400).send(errorMessage("Invalid Email"));

    if(name.length <= 2)
        return res.status(400).send(errorMessage("Name must be at least two characters long"));

    if(!passwordValidator(password)){
        return res.status(400).send({
            error:"invalid password",
            requirements: [
                "8 characters long",
                "numbers",
                "special symbols",
                "uppercase letters",
                "lowercase Letters "
            ]
        })
    }

    generateAccount(email, "FACILITY", name, password)
        .then((account) => {
            account.password = "";
            res
                .cookie("authorizationToken", `${generateJWTToken(account, ONE_DAY_MS)}`, {
                    maxAge: ONE_DAY_MS,
                    httpOnly: true,
                })
                .status(201)
                .send(account)

        }).catch((error) => {
            if (error.code === "P2002" && error.meta.target == "email_unique")
                return res.status(400).send(errorMessage("The email is already in use"));
            else
                console.error(error)
                return res.status(500).send(errorMessage("Oops! Something went wrong!"));
        });
}

export default create;