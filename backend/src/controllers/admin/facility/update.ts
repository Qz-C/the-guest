import { PrismaClient } from ".prisma/client";

import {
    Request,
    Response
} from "express";
import { errorMessage } from "../../../util/validations";


const prisma = new PrismaClient();

const update = (req: Request, res: Response) => {

    const { 
        placeName, 
        id,
        placeId,
        customerId 
    } : 
    { 
        placeName:string, 
        id:number,
        placeId:number,
        customerId:number
    } = req.body;

    if(!placeName || !id || !placeId || !customerId)
        return res.status(400).send(errorMessage("Missing required fields"))

    if(isNaN(id))
            return res.status(400).send(errorMessage("Id is invalid"));

    if(isNaN(placeId))
            return res.status(400).send(errorMessage("Id is invalid"));
    
    if(isNaN(customerId))
            return res.status(400).send(errorMessage("Id is invalid"));;

    prisma.facility.update({
        where:{
            id:Number(id)
        },
        data:{
            placeName: placeName,
            customerId: customerId,
            placeId: placeId,
        }
    }).then( (facility) => {
        return res.status(200).send(facility);
    }).catch((error) => {
        if(error.code === "P2025")
            return res.status(404).send(errorMessage("facility not found"));
            
        if (error.code === "P2002" && error.meta.target == "placeName_unique")
            return res.status(400).send(errorMessage("The placeName is already in use"));

        console.error(error)
        return res.status(500).send(errorMessage("Oops! Something went wrong!"));
    })
}

export default update;