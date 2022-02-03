import { Injectable } from '@nestjs/common';
import { RolesService } from 'src/roles/roles.service';
import { createUserDto } from './dto/create-user-dto';
import { User } from './user.entity';


@Injectable()
export class UserService {
  constructor(
    // @InjectRepository(User)
    // private userRepository: Repository<User>,
    // private roleService: RolesService
  ) {}

  // async findAll(): Promise<User[]> {
  //   return this.userRepository.find();
  // }

  // async findOne(id: string): Promise<User> {
  //   return this.userRepository.findOne(id);
  // }

  // async remove(id: number): Promise<number> {
  //   const result = await this.userRepository.delete(id);
  //   return result.affected;
  // }

  // async create(dto: createUserDto) {
  //   const user = await this.userRepository.insert(dto);
  //   if (!dto['role']) {
  //     const role = await this.roleService.getRolesByRolesId(1);
  //     //await this.userRepository.update(user.raw.insertId, {role: role.id})
  //   }
    
  //   return user;
  // }
}
