import { PrismaClient } from ".prisma/client";

import {
    Request,
    Response
} from "express";
import { errorMessage } from "../../../util/validations";


const prisma = new PrismaClient();

const create = (req: Request, res: Response) => {

    const { country, 
            city, 
            street, 
            building} : 
    { country:string, 
      city:string, 
      street:string, 
      building:string} = req.body;

    if(!country || !city || !street || !building)
        return res.status(400).send(errorMessage("Missing required fields"));
    
    prisma.place.create({
        data:{
            country: country,
            city: city,
            street: street,
            building:building
        }
    }).then( (place) => {
        return res.status(201).send(place);
    }).catch((error) => {
        console.error(error);
        return res.status(500).send(errorMessage("Oops! Something went wrong!"));
    })
    }
export default create;