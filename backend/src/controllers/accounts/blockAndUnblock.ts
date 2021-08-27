import { 
    PrismaClient, 
} from '@prisma/client';

import { 
    Request,
    Response 
} from "express";
import { isBooleanObject } from 'util/types';

import { 
    errorMessage,
} from '../../util/validations';

const prisma = new PrismaClient();

    const blockAndUnblock = async (req: Request, res: Response) => {

        if(!req.query.id || req.body.active === undefined)
            return res.status(400).send(errorMessage("Missing required fields"));

        const active = Boolean(req.body.active);

        const id:number = Number(req.query.id);

        if(isNaN(id))
            return res.status(400).send(errorMessage("invalid id"));

        prisma.account.update({
            where : {
                id: id
            },
            data:{
                active:active
            }
        }).then((account)=> {
            res.status(200).send(account)
        }).catch((error) => {
            if(error.code === "P2025")
                res.status(404).send(errorMessage("Account not found"));
            else
                res.status(500).send(errorMessage("Oops! Something went wrong!"));
        })
        
    }

export default blockAndUnblock;