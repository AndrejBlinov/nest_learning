import { Module } from '@nestjs/common';
import { Roles } from 'src/roles/roles.entity';
import { RolesModule } from 'src/roles/roles.module';
import { User } from './user.entity';

@Module({
  imports: [
    //TypeOrmModule.forFeature([User, Roles]),
    RolesModule
  ],
  exports: []
})
export class UserModule {}
