import { Module } from "@nestjs/common";
import { ConfigModule } from "@nestjs/config";
import { AppService } from "./app.service";
import { UserModule } from './user/user.module';
import { User } from './user/user.entity';
import { UserService } from "./user/user.service";
import { UserController } from "./user/user.controller";
import { RolesModule } from './roles/roles.module';
import { UserRoles } from "./roles/user-roles-entity";
import { SequelizeModule } from "@nestjs/sequelize";

@Module( {
    controllers: [UserController],
    providers: [AppService,UserService],
    imports: [
            ConfigModule.forRoot({
                envFilePath: '.env',
            }),
            SequelizeModule.forRoot({
              dialect: 'postgres',
              host: 'localhost',
              port: 5432,
              username: 'postgres',
              password: 'root',
              database: 'nest-learning',
              models: [],
              autoLoadModels: true
            }),
            UserModule,
            RolesModule,
            UserRoles,
    ]
})
export class AppModule {}