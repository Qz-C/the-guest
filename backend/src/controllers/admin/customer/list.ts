import { PrismaClient } from ".prisma/client";

import {
    Request,
    Response
} from "express";
import { errorMessage } from "../../../util/validations";


const prisma = new PrismaClient();

const list = (req: Request, res: Response) => {

    prisma.customer.findMany({
        include:{
            facilities:true
        },
        orderBy:{
            name: 'asc'
        }
    })
    .then( (customer) => {
            return res.status(200).send(customer);
    }).catch((error) => {
            console.error(error)
            return res.status(500).send(errorMessage("Oops! Something went wrong!"));
    })
}
export default list;