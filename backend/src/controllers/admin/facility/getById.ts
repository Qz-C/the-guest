import { PrismaClient } from ".prisma/client";

import {
    Request,
    Response
} from "express";
import { errorMessage } from "../../../util/validations";


const prisma = new PrismaClient();

const getById = (req: Request, res: Response) => {

    let id = undefined;

    if (req.authAccount !== undefined && req.authAccount.role === "FACILITY")
        id = req.authAccount.id;
    else
        id = req.body.id;

    if(!id)
        res.status(400).send(errorMessage("Missing required params"));

    if(isNaN(id))
        res.status(400).send(errorMessage("Field numberOfEmployees is invalid"));
    
    prisma.facility.findUnique({
            where: {
                id:Number(id)
            },
            include:{
                customer:true,
                place:true,
                visits:true,
            }
    }).then( (facility) => {
        if(facility?.id)
            return res.status(200).send(facility);
        else return res.status(404).send(errorMessage("facility not found"));
    }).catch((error) => {
            console.error(error)
            return res.status(500).send(errorMessage("Oops! Something went wrong!"));
    })
    }
export default getById;