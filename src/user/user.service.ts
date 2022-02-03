import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { createUserDto } from './dto/create-user-dto';
import { User } from './user.entity';

@Injectable()
export class UserService {
  constructor( @InjectModel(User) private userRepository: typeof User ) {}

    async create(dto: createUserDto) {
      const user = await this.userRepository.create(dto);
      return user;
    }

    async findAll() {
      const users = await this.userRepository.findAll();
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
