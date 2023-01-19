import { Module } from "@nestjs/common"
import { PrismaService } from "src/prisma/prisma.service"

@Module({
    imports: [],
    controllers: [],
    providers: [],
})
export class UserModule {

    constructor(private prisma: PrismaService) {}

    async getUsers() {
        return await this.prisma.user.findMany()
    }
}
