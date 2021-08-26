import { 
    PrismaClient, 
} from '@prisma/client';

import { 
    Request,
    Response 
} from "express";

import { 
    blockAndUnblockActionValidator,
    errorMessage,
} from '../../util/validations';

const prisma = new PrismaClient();

    const block = async (req: Request, res: Response) => {

        if(!req.query.id || !req.query.action)
            return res.status(400).send(errorMessage("Missing required fields"));

        const action = String(req.query.action);

        if(!blockAndUnblockActionValidator(action))
            return res.status(400).send(errorMessage("Invalid action"));

        let performAction:boolean = false;
        if(action.toLowerCase() === "unblock")
            performAction = true;
        if(action.toLowerCase() === "block")
            performAction = false;

        const id:number = Number(req.query.id);

        if(isNaN(id))
            return res.status(400).send(errorMessage("invalid id"));

        prisma.account.update({
            where : {
                id: id
            },
            data:{
                active: performAction
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

export default block;