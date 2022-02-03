import { Module } from '@nestjs/common';
import { RolesService } from './roles.service';
import { RolesController } from './roles.controller';
import { SequelizeModule } from '@nestjs/sequelize';
import { Role } from './roles.entity';
import { User } from 'src/user/user.entity';
import { UserRoles } from './user-roles.entity';

@Module({
  providers: [RolesService],
  controllers: [RolesController],
  imports: [
    SequelizeModule.forFeature([Role,User,UserRoles]),
  ],
  exports: [RolesService]
})
export class RolesModule {}
