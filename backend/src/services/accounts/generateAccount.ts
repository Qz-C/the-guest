import {
    PrismaClient, Role,
} from '@prisma/client';

import {
    generateSecurePassword,
    hashPassword
} from "../../util/security"

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
    account.password = password;
    return account;
}

export default generateAccount;


// if(error.code === "P2002" && error.meta.target == "email_unique")
// return res.status(400).send(errorMessage("The email is already in use"));
// else
// return res.status(500).send(errorMessage("Oops! Something went wrong!"));