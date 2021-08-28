import {
    PrismaClient, Role,
} from '@prisma/client';

import {
    generateSecurePassword,
    hashPassword
} from "../../../util/security"

const prisma = new PrismaClient();

const generateAccount = async (email: string, role: Role): Promise<any> => {
    let password = generateSecurePassword(8);
        const account = await prisma.account.create({
            data: {
                email: email,
                role: role,
                password: await hashPassword(password)
            }
    })

    if(account.id){
        insertSpecification(role,account.id)
    }
    account.password = password;
    return account;
}

const insertSpecification = async (role: Role, id:number):Promise<any> => {
    let specificAccount;
    switch(role){
        case "USER" : specificAccount = await prisma.user.create({
                      data: {id:id}
                      })
                      break;
        
        case "ADMIN" : specificAccount = await prisma.admin.create({
                        data: {id:id}
                       })
                       break;
        
        case "FACILITY" : specificAccount = await prisma.facility.create({
                           data: {id:id}
                       })
                       break;
    }
    return specificAccount;
}

export default generateAccount;
