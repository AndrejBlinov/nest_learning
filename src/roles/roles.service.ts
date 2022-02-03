import { Injectable } from '@nestjs/common';
import { createRolesDto } from './dto/create-roles-dto';
import { Roles } from './roles.entity';

@Injectable()
export class RolesService {

    // constructor(
    //     private userRoleRepository: Repository<Roles>,
    //   ) {}

    // async createRoles(dto: createRolesDto) {
    //     const role = await this.userRoleRepository.insert(dto);
    //     return role;
    // }

    // async getRolesByRolesId(id: number) {
    //     return this.userRoleRepository.findOne({where: {'value': id}});
    // }
}
