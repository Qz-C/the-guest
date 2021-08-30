import { Account, PrismaClient } from ".prisma/client";

import {
    Request,
    Response
} from "express";
import { errorMessage } from "../../util/validations";


const prisma = new PrismaClient();

export const respondInvitation = (req: Request, res: Response) => {   

    const id:number = req.body.id
    const accepted:boolean = req.body.accepted;
    const justification:string = req.body.justification;

    if(accepted === undefined || !id)
        return res.status(400).send(errorMessage("Missing required fields"));
        
    if(!accepted && !justification)
        return res.status(400).send(errorMessage("To refuse you must justify"));

    

    prisma.visitor.update({
        where:{
            id: id
        },
        data:{
            accepted: accepted,
            justification: justification
        },
        include : {
            visit: true
        }
    }).then((visit) => {
        return res.status(200).send(visit);
    }).catch((error) => {
        console.error(error)
        return res.status(500).send(errorMessage("Oops! Something went wrong!"));
    })
}