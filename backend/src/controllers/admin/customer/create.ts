import { PrismaClient } from ".prisma/client";

import {
    Request,
    Response
} from "express";
import { errorMessage } from "../../../util/validations";


const prisma = new PrismaClient();

const create = (req: Request, res: Response) => {

    const { name, numberOfEmployees, lead }: 
    {name:string, numberOfEmployees:number, lead:boolean} = req.body;

    if(!name || !numberOfEmployees || lead === undefined)
        return res.status(400).send(errorMessage("Missing required fields"));

    if(isNaN(numberOfEmployees))
        return res.status(400).send(errorMessage("Field numberOfEmployees is invalid"));
    
    prisma.customer.create({
        data:{
            name: name,
            numberOfEmployees: numberOfEmployees,
            lead: lead
        }
    }).then( (customer) => {
        return res.status(201).send(customer);
    }).catch((error) => {
        console.error(error);
        return res.status(500).send(errorMessage("Oops! Something went wrong!"));
    })
    }
export default create;