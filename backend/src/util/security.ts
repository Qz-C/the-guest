const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
require('dotenv').config();
import { hasAnyDigit, hasAnySpecialSymbol, hasAnyLowerCase, hasAnyUpperCase } from "./validations";

const LOWER_CASE      :string = "abcdefghijklmnopqrstuvwxyz";
const UPPER_CASE      :string = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"; 
const NUMBERS         :string = "0123456789";                 
const SPECIAL_SYMBOLS :string = "@$!%*?&";              
                        
export const hashPassword = async (password:string):Promise<string> => {
    return (await bcrypt.hash(password, 10));
}

export const comparedHashedPassword = async (plaintextPassword:string, hashedPassword:string):Promise<boolean> => {
    return (await bcrypt.compare(plaintextPassword, hashedPassword))
}

export const generateJWTToken = (params:any, timeout:number):string => {
    return jwt.sign(params, process.env.SECRET_AUTH, {
        expiresIn: timeout
    })
}

export const generateSecurePassword = (minimumLength:number):string => {

    let password:string = "";

    const chars:string = LOWER_CASE+
                         UPPER_CASE+
                         NUMBERS+
                         SPECIAL_SYMBOLS;

    for(let i = 0; i < minimumLength ; i++){

        if(i === minimumLength-1){
            if(!hasAnyDigit(password))
                password += NUMBERS[Math.floor(Math.random() * NUMBERS.length)]
            if(!hasAnySpecialSymbol(password))
                password += SPECIAL_SYMBOLS[Math.floor(Math.random() * SPECIAL_SYMBOLS.length)]
            if(!hasAnyLowerCase(password))
                password += LOWER_CASE[Math.floor(Math.random() * LOWER_CASE.length)]
            if(!hasAnyUpperCase(password))
                password += UPPER_CASE[Math.floor(Math.random() * UPPER_CASE.length)]    
        }
        password += chars.charAt(Math.floor(Math.random() * chars.length));
    }

    return password;
}