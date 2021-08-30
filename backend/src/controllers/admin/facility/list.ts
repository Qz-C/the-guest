import { PrismaClient } from ".prisma/client";

import {
    Request,
    Response
} from "express";
import { errorMessage } from "../../../util/validations";


const prisma = new PrismaClient();

const list = (req: Request, res: Response) => {

    prisma.facility.findMany({
        include:{
            customer:true,
            place:true,
        },orderBy:{
            placeName: 'asc'
        }
    },)
    .then( (facility) => {
            return res.status(200).send(facility);
    }).catch((error) => {
            console.error(error)
            return res.status(500).send(errorMessage("Oops! Something went wrong!"));
    })
}
export default list;