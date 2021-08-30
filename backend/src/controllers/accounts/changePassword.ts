import { PrismaClient } from ".prisma/client";

import {
    Request,
    Response
} from "express";

import { comparedHashedPassword, hashPassword } from "../../util/security";

import {
    errorMessage,
    passwordValidator,
    successMessage,
} from '../../util/validations';

const prisma = new PrismaClient();

const changePassword = new PrismaClient();

const create = async (req: Request, res: Response) => {

    const { password }: any = req.body;
    
    const account:any = req.authAccount;

    if (!password)
        return res.status(400).send("Missing required fields")

    if(!passwordValidator(password))
        return res.status(400).send(errorMessage("Invalid password"))
    
    prisma.account.findUnique({
        where:{
            id: account.id
        }
    }).then( async (account) => {
        if(account?.password)
            if((await comparedHashedPassword(password, account?.password)))
                res.status(400).send(errorMessage("You entered a password equals to the current one"))
            else{
                prisma.account.update({
                    where:{
                        id:account.id
                    },
                    data:{
                        password:await hashPassword(password),
                        firstAccess: false,
                        updatedAt: new Date()
                    }
                }).then(() => {
                    return res.status(200).send(successMessage("password updated successfully"))
                }).catch((error) => {
                    console.error(error)
                    return res.status(500).send(errorMessage("Oops! Something went wrong!"));
                })
            }
    }).catch((error) => {
        console.error(error)
        return res.status(500).send(errorMessage("Oops! Something went wrong!"));
    })
    
}
export default create;