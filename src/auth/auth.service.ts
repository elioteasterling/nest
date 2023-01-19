import { UserModule } from './../user/user.module';
import { Injectable }    from "@nestjs/common"
import { PrismaService } from "src/prisma/prisma.service"

@Injectable()
export class AuthService {

    constructor(private prisma: PrismaService) {}
    
    async login(id: string)  { return await this.prisma.user.findUnique( { where: { id } } )    }
    async logout() { return "hello buddy from logout" }
    async signup() { return "hello champ from signup" }
}
