import { Module } from "@nestjs/common";
import { ConfigModule } from "@nestjs/config";
import { UserModule } from './user/user.module';
import { SequelizeModule } from "@nestjs/sequelize";
import { User } from "./user/user.entity";
import { RolesService } from './roles/roles.service';
import { RolesModule } from './roles/roles.module';
import { Roles } from "./roles/roles.entity";

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
              models: [User,Roles],
              autoLoadModels: true
            }),
            UserModule,
            RolesModule,
    ]
})
export class AppModule {}