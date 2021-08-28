import { Role, PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const createSpecification = async (role: Role, id:number):Promise<any> => {
    
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

export default createSpecification;