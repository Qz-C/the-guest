import { PrismaClient } from ".prisma/client";

import {
    Request,
    Response
} from "express";
import { errorMessage } from "../../../util/validations";


const prisma = new PrismaClient();

const getById = (req: Request, res: Response) => {

    const  id  : any = req.query.id;

    if(!id)
        res.status(400).send(errorMessage("Missing required params"));

    if(isNaN(id))
        res.status(400).send(errorMessage("invalid Id"))
    
    prisma.place.findUnique({
            where: {
                id:Number(id)
            }
    }).then( (place) => {
        if(place?.id)
            return res.status(200).send(place);
        else return res.status(404).send(errorMessage("place not found"));
    }).catch((error) => {
            console.error(error)
            return res.status(500).send(errorMessage("Oops! Something went wrong!"));
    })
}
export default getById;