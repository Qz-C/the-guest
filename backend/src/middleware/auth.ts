import { Response, Request, NextFunction } from "express";
import { VerifyErrors } from "jsonwebtoken";
const jwt = require("jsonwebtoken");

const auth = (permissions:String[]) => {

 return (req: Request, res: Response, next: NextFunction) => {

    const token:String = req.cookies.jwt || undefined;

    if( !token )
        return res.status(401).send({"Error":"No token provided"});

    const parts:string[] = token.split(' ');
    if(parts.length !== 2)
        return res.status(401).send({ "Error": "Token error" });
    
    const [prefix, jwtToken] = parts;

    if(! /^Bearer$/i.test((prefix)))
        return res.status(401).send({ "Error": "Token malformated" });

    jwt.verify(token, process.env.SECRET_AUTH, (err: VerifyErrors | null, decoded: any) => {
        if (err)
            return res.status(401).send({ "Error": "Invalid token" });

        if(permissions.includes(decoded.user.role)){
            req.authUser = decoded.user;
            return next();
        }else
            return res.status(401).send({"Error":"User not authorized"});
        })
    }
}