import { Account, PrismaClient } from ".prisma/client";

import {
    Request,
    Response
} from "express";
import { errorMessage } from "../../util/validations";


const prisma = new PrismaClient();

export const listVisits = (req: Request, res: Response) => {   
    
    const authAccount:Account = req.authAccount;

    prisma.visitor.findMany({
        where:{
            email: authAccount.email
        },
        include:{
            visit:true
        }
    }).then((visits) => {
        return res.status(200).send(visits);
    }).catch((error) => {
        console.error(error)
        return res.status(500).send(errorMessage("Oops! Something went wrong!"));
    })
}