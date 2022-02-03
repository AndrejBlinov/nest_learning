import { Injectable } from '@nestjs/common';
import { UserRoles } from './dto/create-roles-dto';
import { Role } from './roles.entity';

@Injectable()
export class RolesService {

    constructor() {}

    async createRole(dto: UserRoles) {
        const role = await Role.create(dto);
        return role;
    }

    async getRoleByValue(value: string) {
        const role = await Role.findOne({where: {value}})
        return role;
    }

}