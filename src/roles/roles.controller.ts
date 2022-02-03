import { Body, Controller, Get, Param, Post, Query } from '@nestjs/common';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { createRolesDto } from './dto/create-roles-dto';
import { RolesService } from './roles.service';

@ApiTags('Роли пользователей')
@Controller('/api/roles')
export class RolesController {

    constructor(private rolesService: RolesService) {}

    // @ApiOperation({ summary: "Создание роли пользователя." })
    // @ApiResponse( {status: 200} )
    // @Post()
    // create(@Body() dto: createRolesDto) {
    //     return this.rolesService.createRoles(dto);
    // }

    // @ApiOperation({ summary: "Получение роли пользователя." })
    // @ApiResponse( {status: 200} )
    // @Get()
    // getByRolesId(@Query('roleId') roleId: number) {
    //     const result = this.rolesService.getRolesByRolesId(roleId);
    //     return result
    // }
}
