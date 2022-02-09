import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { RolesService } from 'src/roles/roles.service';
import { addRoleDto } from './dto/add-role.dto';
import { banUserDto } from './dto/ban-user.dto';
import { createUserDto } from './dto/create-user-dto';
import { User } from './user.entity';

@Injectable()
export class UserService {
  constructor( @InjectModel(User) private userRepository: typeof User) {}

    async create(dto: createUserDto) {
      const userAuth = await this.getUserByLogin(dto.login)
      if (userAuth) {
          throw new HttpException('Пользователь с таким login уже существует', HttpStatus.BAD_REQUEST)
      }
      const user = await this.userRepository.create(dto);

      const roleService = new RolesService();
      const role = await roleService.getRoleByValue('1');
     
      await user.$set('roles', [role.id]);
      user.roles = [role]
      return user;
    }

    async addAdmin(dto: createUserDto) {
      const userAuth = await this.getUserByLogin(dto.login)
      if (userAuth) {
          throw new HttpException('Пользователь с таким login уже существует', HttpStatus.BAD_REQUEST)
      }
      const user = await this.userRepository.create(dto);

      const roleService = new RolesService();
      const role = await roleService.getRoleByValue('2');
     
      await user.$set('roles', [role.id]);
      user.roles = [role]
      return user;
    }

    async findAll() {
      const users = await this.userRepository.findAll( {include: {all: true}} );
      return users
    }

    async getUserByLogin(login: string) {
      const users = await this.userRepository.findAll( {where: {login}, include: {all: true}} );
      return users[0];
    }

    async getUserById(id: number) {
      const user = await this.userRepository.findByPk(id);
      if (user) {
        return user;
      }
      throw new HttpException('Пользователь не найден',HttpStatus.NOT_FOUND)
    }

    async addRole(dto: addRoleDto) {
      const user = await this.userRepository.findByPk(dto.userId);
      const roleService = new RolesService();
      const role = await roleService.getRoleByValue(dto.value);
      
      if (user && role) {
        await user.$add('role', [role.id]);
        return dto;
      }
      throw new HttpException('Пользователь или роль не найдены',HttpStatus.NOT_FOUND)
    }

    async banUser(dto: banUserDto) {
      const user = await this.userRepository.findByPk(dto.userId);
      if (user) {
        user.banned = true;
        user.bannedReason = dto.banReason;
        await user.save();
        return user;
      }
      throw new HttpException('Пользователь не найден',HttpStatus.NOT_FOUND)
    }
    
    async findOne(id: number): Promise<User> {
      return this.userRepository.findOne({where: {id: id}});
    }

    async remove(id: number) {
      // const result = await this.userRepository.destroy();
      // return result;
    }
}
