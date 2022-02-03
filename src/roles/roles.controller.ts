import {Body, Controller, Get, Param, Post} from '@nestjs/common';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { UserRoles } from './dto/create-roles-dto';
import { Role } from './roles.entity';
import {RolesService} from "./roles.service";

@ApiTags('Роли пользователей')
@Controller('api/roles')
export class RolesController {
    constructor(private roleService: RolesService) {}

    @ApiOperation({ summary: "Создание роли" })
    @ApiResponse({ status: 200, type: [Role]})
    @Post()
    create(@Body() dto: UserRoles) {
        return this.roleService.createRole(dto);
    }

    @ApiOperation({ summary: "Получение роли по ID" })
    @ApiResponse({ status: 200, type: [Role]})
    @Get('/:value')
    getByValue(@Param('value') value: string) {
        return this.roleService.getRoleByValue(value);
    }
}