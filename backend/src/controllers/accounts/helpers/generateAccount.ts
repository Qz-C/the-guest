import {
    PrismaClient, Role,
} from '@prisma/client';

import {
    generateSecurePassword,
    hashPassword
} from "../../../util/security"

const prisma = new PrismaClient();

const generateAccount = async (email: string, role: Role, name:string, password?:string ): Promise<any> => {
    if(!password){
        password = generateSecurePassword(8);
    }
        const account = await prisma.account.create({
            data: {
                email: email,
                role: role,
                password: await hashPassword(password),
                userName:name
            }
    })
    account.password = password;
    return account;
}

export default generateAccount;
