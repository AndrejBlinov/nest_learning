import { ApiTags } from '@nestjs/swagger';
import { UserService } from './user.service';
import { ApiOperation, ApiResponse } from "@nestjs/swagger";
import { Body, Controller, Get, Post, Delete } from "@nestjs/common";
import { User } from "./user.entity";
import { createUserDto } from "./dto/create-user-dto";

@ApiTags('Пользователи')
@Controller('/api/users')
export class UserController {
    constructor (private userService: UserService) {}

    @ApiOperation({ summary: "Получение всех пользователей." })
    @ApiResponse({ status: 200, type: [User]})
    @Get('/')
    findAll() {
        return this.userService.findAll();
    }

    @ApiOperation({ summary: "Создание пользователя." })
    @ApiResponse({ status: 200, type: User})
    @Post('/')
    create (@Body() userDto: createUserDto) {
        return this.userService.create(userDto);
    }

    @ApiOperation({ summary: "Удаление пользователя." })
    @ApiResponse({ status: 200 })
    @Delete('/')
    delete (@Body() id: number) {
        return this.userService.remove(id);
    }
}
