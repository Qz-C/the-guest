import {
    PrismaClient, Role,
} from '@prisma/client';

import {
    generateSecurePassword,
    hashPassword
} from "../../../util/security"

import createSpecification from './createSpecification';

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
        await createSpecification(role,account.id)
    }
    account.password = password;
    return account;
}

export default generateAccount;
