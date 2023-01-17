import { Module } from "@nestjs/common"
import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()

@Module({
    imports: [],
    controllers: [],
    providers: [],
})
export class UserModule {

    async getUsers() {
        return await prisma.user.findMany()
    }
}
