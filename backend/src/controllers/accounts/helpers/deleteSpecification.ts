import { Role, PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const deleteSpecification = async (role: Role, id:number):Promise<any> => {
    
    let specificAccount;
    
    switch(role){
        case "USER" : specificAccount = await prisma.user.delete({
                      where: {id:id}
                      })
                      break;
        
        case "ADMIN" : specificAccount = await prisma.admin.delete({
                        where: {id:id}
                       })
                       break;
        
        case "FACILITY" : specificAccount = await prisma.facility.delete({
                           where: {id:id}
                       })
                       break;
    }
    return specificAccount;
}

export default deleteSpecification;