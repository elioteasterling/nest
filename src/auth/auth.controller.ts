import { AuthService } from './auth.service';
import { Controller, Post } from "@nestjs/common";

@Controller()
export class AuthController {
    constructor(private authService: AuthService) { }   // DEPENDENCY INJECTION !!!

    @Post('login')
    login()  { return this.authService.login('') }      // ROUTE STRUCTURE:  https://host:port/auth/login  (/folder/function)

    @Post('logout')
    logout() { return this.authService.logout() }       // AUTO CONVERSION:  e.g., type string returns an html document whereas type object returns application/json

    @Post('signup')
    signup() { return this.authService.signup() }

    @Post('json')
    json() { return { user: "you" } }
}
