import {Body, Controller, Get, Param, Post} from '@nestjs/common';
import { UserRoles } from './dto/create-roles-dto';
import {RolesService} from "./roles.service";

@Controller('api/roles')
export class RolesController {
    constructor(private roleService: RolesService) {}

    @Post()
    create(@Body() dto: UserRoles) {
        return this.roleService.createRole(dto);
    }

    @Get('/:value')
    getByValue(@Param('value') value: string) {
        return this.roleService.getRoleByValue(value);
    }
}