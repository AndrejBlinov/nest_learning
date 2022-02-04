import { HttpException, HttpStatus, Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { createUserDto } from 'src/user/dto/create-user-dto';
import { UserService } from 'src/user/user.service';
import * as bcryptjs from 'bcryptjs'
import { User } from 'src/user/user.entity';

@Injectable()
export class AuthService {

    constructor(
        private userService: UserService,
        private jwsService: JwtService 
    ) {}

    async login( userDto: createUserDto) {
        const user = await this.validateUser(userDto);
        return this.generateToken(user);
    }

    async registration( userDto: createUserDto) {
        const userAuth = await this.userService.getUserByLogin(userDto.login)
        if (userAuth) {
            throw new HttpException('Пользователь с таким login уже существует', HttpStatus.BAD_REQUEST)
        }

        const password = await bcryptjs.hash(userDto.password, 5);

        const user = await this.userService.create({...userDto, password: password})
        return this.generateToken(user)
    }

    private async generateToken(user: User) {
        const payload = {email: user.email, id: user.id, roles: user.roles}
        return {
            token: this.jwsService.sign(payload)
        }
    }

    private async validateUser(userDto: createUserDto) {
        const user = await this.userService.getUserByLogin(userDto.login);  
        //const passwordEquals = await bcryptjs.compare(userDto.password, user.password);
        if (user && (userDto.password===user.password)) {
            return user;
        }
        throw new UnauthorizedException({massage: 'Не правильные авторизовочные данные'})
    }
}
