import { Injectable } from "@nestjs/common";

@Injectable({})
export class AuthService {
    login()  { return "hello guy from login" }
    logout() { return "hello buddy from logout" }
    signup() { return "hello champ from signup" }
}
