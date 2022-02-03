import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { Role } from 'src/roles/roles.entity';
import { UserRoles } from 'src/roles/user-roles.entity';
import { UserController } from './user.controller';
import { User } from './user.entity';
import { UserService } from './user.service';

@Module({
  controllers: [UserController],
  providers: [UserService],
  imports: [
      SequelizeModule.forFeature([User,Role,UserRoles]),
  ],
    exports: [
        UserService,
    ]
})
export class UserModule {}
