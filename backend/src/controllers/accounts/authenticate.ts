import { 
    PrismaClient, 
} from '@prisma/client';

require('dotenv').config();

import { 
    Request, 
    Response 
} from "express";

import { 
    comparedHashedPassword,  
    generateJWTToken, 
} from '../../util/security';

import { 
    emailValidator,
    errorMessage,
} from '../../util/validations';

const ONE_DAY_MS:number = 86400000

const prisma = new PrismaClient();

    const authenticate = async (req: Request, res: Response) => {
        
        const { email, password } = req.body;
        
        if(!email || !password)
            return res.status(400).send(errorMessage("Missing required fields"));

        if(!emailValidator(email))
            return res.status(400).send(errorMessage("Invalid Email"));

        prisma.account.findUnique({
            where:{
                email: email
            }
        }).then(async (account)=> {
            if(account?.password){
                if(await comparedHashedPassword(password, account.password)){

                    if(account.active === false){
                        return res.status(403).send(errorMessage("This account has been blocked by an administrator. Please, contact the support for further details."));
                    }

                    account.password = "";
                    res
                        .status(200)
                        .cookie("authorizationToken", `${generateJWTToken(account, ONE_DAY_MS)}`, {
                            maxAge: ONE_DAY_MS,
                            httpOnly: true,
                        })
                        .send({"Access level":account.role})
                    }else
                    return res.status(401).send(errorMessage("Incorrect password"));
   
            }else{
                return res.status(400).send(errorMessage("User not found"));
            }
        }).catch((error) => {
            return res.status(500).send(errorMessage("Oops! Something went wrong!"));
        })
    }

export default authenticate;