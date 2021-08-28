import { 
    PrismaClient, Role, 
} from '@prisma/client';

import { 
    Request,
    Response 
} from "express";

import { 
    errorMessage, roleValidator, successMessage,
} from '../../util/validations';

import createSpecification from './helpers/createSpecification';
import deleteSpecification from './helpers/deleteSpecification';

const prisma = new PrismaClient();

    const changeRole = async (req: Request, res: Response) => {
        
        const { id, role } : {id:number, role:Role} = req.body;

        if(!id || !role)
            return res.status(400).send(errorMessage("Missing Requirements"));

        if(isNaN(id))
            return res.status(400).send(errorMessage("Invalid id"));

        if(!roleValidator(role))
            return res.status(400).send(errorMessage("Invalid role"));

        let oldRole:Role;

        prisma.account.findUnique({
            where:{
                id:id
            }
        }).then(async (account) => {
            if(account?.role){
                if(account?.role === role)
                    return res.status(200).send(successMessage("This account has already this access level"));
                else{
                    oldRole = account?.role;
                    await prisma.account.update({
                        where:{
                            id:id
                        },
                        data:{
                            role: role
                        }
                    }).then( async (account) => {
                        await deleteSpecification(oldRole, account.id)
                        await createSpecification(account.role, account.id);
                        account.password = ""
                        res.status(200).send(account);
                    }).catch((error) => {
                        console.error(error);
                        res.status(500).send(errorMessage("Oops! Something went wrong!"));
                    })
                }   
            }else
                return res.status(404).send(errorMessage("Account not found"));
        }).catch((error) => {
            console.error(error);
            return res.status(500).send(errorMessage("Oops! Something went wrong!"));
        })
    }

export default changeRole;