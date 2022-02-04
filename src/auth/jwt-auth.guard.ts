import { CanActivate, ExecutionContext, Injectable, UnauthorizedException } from "@nestjs/common";
import { JwtService } from "@nestjs/jwt";
import { Observable } from "rxjs";

@Injectable()
export class JwtAuthGuard implements CanActivate {

    constructor(private jwtServise: JwtService) {}
    
    canActivate(context: ExecutionContext): boolean | Promise<boolean> | Observable<boolean> {
        const req = context.switchToHttp().getRequest()

        try {
            const authHeader = req.headers.authorization;
            const header = authHeader.split(' ');
            const bearer = header[0];
            const token = header[1];

            if (bearer !== 'Bearer' || !token) {
                this.getExcuprionAuthorization("Токен или header не верны или отсутстуют");
            }

            const user = this.jwtServise.verify(token);
            req.user = user;
            return true;

        } catch (e){
            this.getExcuprionAuthorization("Пользователь не авторизован");
        }
        return undefined
    }

    private getExcuprionAuthorization(message: string) {
        throw new UnauthorizedException(message);
    }
}