import { AuthService } from './auth.service';
import { Controller, Post } from "@nestjs/common";

@Controller()
export class AuthController {
    constructor(private authService: AuthService) { }    // DEPENDENCY INJECTION !!!

    @Post('login')
    login()  { this.authService.login() }

    @Post('logout')
    logout() { this.authService.logout() }

    @Post('signup')
    signup() { this.authService.signup() }
}
