import { Prisma, PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()
const createUser = async (req,res)=>{
    const user = await  prisma.user.create({
        email:req.body.email,
        name:req.body.name,
      
    })

}