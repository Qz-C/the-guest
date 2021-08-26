import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

module.exports = {
    async login(req: Request, res: Response){
        const { body } = req;



    }
}