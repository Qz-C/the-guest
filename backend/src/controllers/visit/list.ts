import { Account, PrismaClient } from ".prisma/client";

import {
    Request,
    Response
} from "express";
import { errorMessage } from "../../util/validations";


const prisma = new PrismaClient();

export const list = (req: Request, res: Response) => {   
    
    const authAccount:Account = req.authAccount;

    const include = {
        visitors:true,
        place: true,
    };

    const orderBy = {
        startTime: "desc"
    }


    let search:any = {
        include,
        orderBy
    };


    if(authAccount.role === "FACILITY"){
        search =  {
            where:{
                facilityId:authAccount.id
            },
            include,
            orderBy
        };
    }

    prisma.visit.findMany(
        search
    ).then((visits) => {
        return res.status(200).send(visits);
    }).catch((error) => {
        console.error(error)
        return res.status(500).send(errorMessage("Oops! Something went wrong!"));
    })
}