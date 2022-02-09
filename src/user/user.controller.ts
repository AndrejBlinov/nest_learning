import { ApiParam, ApiTags } from '@nestjs/swagger';
import { UserService } from './user.service';
import { ApiOperation, ApiResponse } from "@nestjs/swagger";
import { Body, Controller, Get, Post, Delete, UseGuards, UsePipes } from "@nestjs/common";
import { User } from "./user.entity";
import { createUserDto } from "./dto/create-user-dto";
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';
import { Roles } from 'src/auth/role-auth.decorator';
import { RoleGuard } from 'src/auth/role.guard';
import { addRoleDto } from './dto/add-role.dto';
import { banUserDto } from './dto/ban-user.dto';
import { ValidationPipe } from 'src/pipes/validation.pipe';

@ApiTags('Пользователи')
@Controller('/api/users')
export class UserController {
    constructor (private userService: UserService) {}

    @ApiOperation({ summary: "Получение всех пользователей." })
    @ApiResponse({ status: 200, type: [User]})
    @UseGuards(JwtAuthGuard)
    @Get('/')
    findAll() {
        return this.userService.findAll();
    }

    @ApiOperation({ summary: "Получение пользователя по ID." })
    @ApiResponse({ status: 200, type: [User]})
    @UseGuards(JwtAuthGuard)
    @Post('/user')
    find(@Body('userId') userId: number) {
        return this.userService.getUserById(userId);
    }

    @ApiOperation({ summary: "Создание пользователя." })
    @ApiResponse({ status: 200, type: User})
    @Roles('2')     //2 - Admin
    @UseGuards(RoleGuard)
    @UsePipes(ValidationPipe)
    @Post('/')
    create (@Body() userDto: createUserDto) {
        return this.userService.create(userDto);
    }

    @ApiOperation({ summary: "Выдача ролей пользователю" })
    @ApiResponse({ status: 200})
    @Roles('2')     //2 - Admin
    @UseGuards(RoleGuard)
    @Post('/role')
    getRole(@Body() dto: addRoleDto) {
        return this.userService.addRole(dto);
    }

    @ApiOperation({ summary: "Блокировка пользователей" })
    @ApiResponse({ status: 200})
    @Roles('2')     //2 - Admin
    @UseGuards(RoleGuard)
    @Post('/ban')
    banUser(@Body() dto: banUserDto) {
        return this.userService.banUser(dto);
    }

    @ApiOperation({ summary: "Удаление пользователя." })
    @ApiResponse({ status: 200 })
    @Delete('/')
    delete (@Body() id: number) {
        return this.userService.remove(id);
    }

    @ApiOperation({ summary: "Создание администратора" })
    @ApiResponse({ status: 200})
    @Post('/admin')
    addAdmin(@Body() dto: createUserDto) {
        return this.userService.addAdmin(dto);
    }
}
