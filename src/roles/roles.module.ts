import { Module } from '@nestjs/common';
import { RolesService } from './roles.service';
import { RolesController } from './roles.controller';
import { Roles } from './roles.entity';
import { User } from 'src/user/user.entity';

@Module({
  providers: [RolesService],
  controllers: [RolesController],
  imports: [],
  exports: [
    RolesService
  ]
})
export class RolesModule {}
