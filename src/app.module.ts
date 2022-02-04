import { Module } from "@nestjs/common";
import { ConfigModule } from "@nestjs/config";
import { UserModule } from './user/user.module';
import { SequelizeModule } from "@nestjs/sequelize";
import { User } from "./user/user.entity";
import { RolesService } from './roles/roles.service';
import { RolesModule } from './roles/roles.module';
import { Role } from "./roles/roles.entity";
import { UserRoles } from "./roles/user-roles.entity";
import { AuthModule } from './auth/auth.module';
import { JwtModule } from "@nestjs/jwt";

@Module( {
    controllers: [],
    providers: [RolesService],
    imports: [
            ConfigModule.forRoot({
                envFilePath: '.env',
            }),
            SequelizeModule.forRoot({
              dialect: 'postgres',
              host: process.env.POSTGRES_HOST,
              port: Number(process.env.POSTGRES_PORT),
              username: process.env.POSTGRES_USER,
              password: process.env.POSTGRES_PASSWORD,
              database: process.env.POSTGRES_DATABASE,
              models: [User,Role,UserRoles],
              autoLoadModels: true
            }),
            UserModule,
            RolesModule,
            AuthModule,
    ]
})
export class AppModule {}