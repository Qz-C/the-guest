import { Response, Request, NextFunction } from "express";
import { VerifyErrors } from "jsonwebtoken";
import { errorMessage } from "../util/validations";
const jwt = require("jsonwebtoken");

const auth = (permissions:String[]) => {

 return (req: Request, res: Response, next: NextFunction) => {

    const token:String = req.cookies.authorizationToken || undefined;

    if( !token )
        return res.status(401).send(errorMessage("No token provided"));

    jwt.verify(token, process.env.SECRET_AUTH, (err: VerifyErrors | null, decoded: any) => {
        if (err)
            return res.status(401).send(errorMessage("Invalid token"));

        if(permissions.includes(decoded.user.role)){
            req.authAccount = decoded.user;
            return next();
        }else
            return res.status(401).send(errorMessage("User not authorized"));
        })
    }
}