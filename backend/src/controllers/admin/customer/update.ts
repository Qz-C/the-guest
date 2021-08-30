import { PrismaClient } from ".prisma/client";

import {
    Request,
    Response
} from "express";
import { errorMessage } from "../../../util/validations";


const prisma = new PrismaClient();

const update = (req: Request, res: Response) => {

    console.log(req.body)

    const { id, name, numberOfEmployees, lead }: 
    {id:number, name:string, numberOfEmployees:number, lead:boolean} = req.body;

    if (!id || !name || !numberOfEmployees || lead === undefined)
        return res.status(400).send(errorMessage("Missing required field"));

    if(isNaN(numberOfEmployees))
        res.status(400).send(errorMessage("Field numberOfEmployees is invalid"));

    if(isNaN(id))
        res.status(400).send(errorMessage("Id is invalid"));
    
    prisma.customer.update({
        where:{
            id:Number(id)
        },
        data:{
            name: name,
            numberOfEmployees: numberOfEmployees,
            lead: lead
        }
    }).then( (customer) => {
        res.status(200).send(customer);
    }).catch((error) => {
        if(error.code === "P2025")
            return res.status(404).send(errorMessage("Customer not found"));
        else
            console.error(error)
            return res.status(500).send(errorMessage("Oops! Something went wrong!"));
    })
    }
export default update;