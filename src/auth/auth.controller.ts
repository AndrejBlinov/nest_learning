import { Body, Controller, Post } from '@nestjs/common';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { createUserDto } from 'src/user/dto/create-user-dto';
import { User } from 'src/user/user.entity';
import { AuthService } from './auth.service';

@ApiTags('Авторизация')
@Controller('/api/auth')
export class AuthController {

    constructor(
        private authService: AuthService
    ) {}

    @ApiOperation({ summary: "Авторизация, получение токена" })
    @ApiResponse({ status: 200, description: '{"token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InRlc3RlbWFpbEB0ZXN0IiwiaWQiOjMsInJvbGVzIjpbeyJpZCI6MSwidmFsdWUiOiIxIiwiZGVzY3JpcHRpb24iOiLQn9C-0LvRjNC30L7QstCw0YLQtdC70YwiLCJjcmVhdGVkQXQiOiIyMDIyLTAyLTAzVDEwOjQ3OjA0LjEwOFoiLCJ1cGRhdGVkQXQiOiIyMDIyLTAyLTAzVDEwOjQ3OjA0LjEwOFoiLCJVc2VyUm9sZXMiOnsiaWQiOjEsInVzZXJJZCI6Mywicm9sZXNJZCI6MX19XSwiaWF0IjoxNjQzODkyNDE5LCJleHAiOjE2NDM5Nzg4MTl9.1FOlx7W8BKV1XFRfvgQWuMUoxegOOrj9aoa_4pl6ZcY"}'})
    @Post('/login')
    login(@Body() userDto: createUserDto) {
        return this.authService.login(userDto)
    }

    @ApiOperation({ summary: "Регистрация пользователя" })
    @ApiResponse({ status: 200, type: [User]})
    @Post('/registration')
    registration(@Body() userDto: createUserDto) {
        return this.authService.registration(userDto)
    }
}
