import { 
    PrismaClient, 
} from '@prisma/client';

import { 
    Request, 
    Response 
} from "express";
import { generateSecurePassword, hashPassword } from '../../util/security';

import { 
    emailValidator,
    errorMessage,
    roleValidator,
} from '../../util/validations';

const prisma = new PrismaClient();

    const create = async (req: Request, res: Response) => {

        const {email, role}:any = req.body;

        if(!email || !role)
            return res.status(400).send("Missing required fields")

        if(!emailValidator(email))
            return res.status(400).send(errorMessage("Invalid Email"));

        if(!roleValidator(role))
            return res.status(400).send(errorMessage("Invalid Role"));

        let password = generateSecurePassword(8);

        prisma.account.create({
            data:{
                email: email,
                role: role.toUpperCase(),
                password: await hashPassword(password)
            }
        }).then((account) => {
            account.password = password;
            return res.status(201).send(account);
        }).catch((error) => {
            if(error.code === "P2002" && error.meta.target == "email_unique")
                return res.status(400).send(errorMessage("The email is already in use"));
            else
                return res.status(500).send(errorMessage("Oops! Something went wrong!"));
        });
    }

export default create;