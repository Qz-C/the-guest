import { Role } from ".prisma/client";
import { Response, Request, NextFunction } from "express";
import { VerifyErrors } from "jsonwebtoken";
import { errorMessage } from "../util/validations";

const jwt = require("jsonwebtoken");

const auth = (permissions:Role[]) => {

 return  (req: Request, res: Response, next: NextFunction) => {

    const cookies:any = req.cookies;

    if( !cookies.authorizationToken)
        return res.status(401).send(errorMessage("User not authorized"));

    const token = cookies.authorizationToken;

    jwt.verify(token, process.env.SECRET_AUTH, (err: VerifyErrors | null, decoded: any) => {
        if (err)
            return res.status(401).send(errorMessage("User not authorized"));

        if(permissions.includes(decoded.role)){
            req.authAccount = decoded;
            return next();
        }else
            return res.status(401).send(errorMessage("User not authorized"));
        })
    }
}

export default auth;