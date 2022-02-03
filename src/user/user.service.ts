import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { RolesService } from 'src/roles/roles.service';
import { createUserDto } from './dto/create-user-dto';
import { User } from './user.entity';

@Injectable()
export class UserService {
  constructor( 
    @InjectModel(User) private userRepository: typeof User,
    ) {}

    async create(dto: createUserDto) {
      const user = await this.userRepository.create(dto);
      const roleService = new RolesService();
      const role = await roleService.getRoleByValue('1');
      await user.$set('roles', [role.id]);
      return user;
    }

    async findAll() {
      const users = await this.userRepository.findAll( {include: {all: true}} );
      return users
    }

  // async findOne(id: number): Promise<User> {
  //   return this.userRepository.findOne(id);
  // }

  async remove(id: number) {
    // const result = await this.userRepository.destroy();
    // return result;
  }
}
