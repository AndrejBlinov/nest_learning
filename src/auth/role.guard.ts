import { CanActivate, ExecutionContext, HttpException, HttpStatus, Injectable, UnauthorizedException } from "@nestjs/common";
import { Reflector } from "@nestjs/core";
import { JwtService } from "@nestjs/jwt";
import { Observable } from "rxjs";
import { ROLES_KEY } from "./role-auth.decorator";

@Injectable()
export class RoleGuard implements CanActivate {

    constructor(
        private jwtServise: JwtService,
        private reflector: Reflector
    ) {}
    
    canActivate(context: ExecutionContext): boolean | Promise<boolean> | Observable<boolean> {
        const req = context.switchToHttp().getRequest()

        try {
            const requiredRoles = this.reflector.getAllAndOverride(ROLES_KEY, [
                context.getHandler(),
                context.getClass()
            ]);

            if (!requiredRoles) {
                return true;
            }

            const authHeader = req.headers.authorization;
            const header = authHeader.split(' ');
            const bearer = header[0];
            const token = header[1];

            if (bearer !== 'Bearer' || !token) {
                this.getExcuprionAuthorization("Токен или header не верны или отсутстуют");
            }

            const user = this.jwtServise.verify(token);
            req.user = user;
            return user.roles.some(role => requiredRoles.includes(role.value))

        } catch (e){
            console.log(e)
            this.getExcuprionAuthorization("Нет доступа");
        }
        return undefined
    }

    private getExcuprionAuthorization(message: string) {
        throw new HttpException(message, HttpStatus.FORBIDDEN);
    }
}