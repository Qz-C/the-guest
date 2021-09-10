import { PrismaClient } from ".prisma/client";

import {
    Request,
    Response
} from "express";

import {
    errorMessage,
} from '../../util/validations';

const prisma = new PrismaClient();


const update = (req: Request, res: Response) => {

    const numberOfEmployees:number = req.body.numberOfEmployees;

    const email:string = req.authAccount.email;

    if (!numberOfEmployees)
        return res.status(400).send("Missing required fields")

    if(isNaN(numberOfEmployees))
        return res.status(400).send(errorMessage("Number of employees must be a number"));

    prisma.customer.update({
        where:{
            email:email
        },
        data:{
            numberOfEmployees:numberOfEmployees
        }
    }).then((customer)=>{
        return res.status(200).send(customer);
    }).catch(() => {
        return res.status(500).send(errorMessage("Oops! Something went wrong!"));
    })
}

export default update;