import { 
    PrismaClient, 
} from '@prisma/client';

import { 
    Request,
    Response 
} from "express";

import { 
    errorMessage,
} from '../../util/validations';

const prisma = new PrismaClient();

    const blockAndUnblock = async (req: Request, res: Response) => {

        const { id, active } : {id:number, active:boolean} = req.body;

        if(!id || active === undefined)
            return res.status(400).send(errorMessage("Missing required fields"));

        if(isNaN(id))
            return res.status(400).send(errorMessage("invalid id"));

        prisma.account.update({
            where : {
                id: id
            },
            data:{
                active:active,
                updatedAt: new Date()
            }
        }).then((account)=> {
            res.status(200).send(account)
        }).catch((error) => {
            if(error.code === "P2025")
                return res.status(404).send(errorMessage("Account not found"));
            else
                console.error(error)
                return res.status(500).send(errorMessage("Oops! Something went wrong!"));
        })
        
    }

export default blockAndUnblock;