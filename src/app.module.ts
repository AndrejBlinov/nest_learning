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
import { PostModule } from './post/post.module';
import { Post } from "./post/post.entity";
import { FilesModule } from './files/files.module';
import { ServeStaticModule } from "@nestjs/serve-static";
import { join } from "path/posix";
import * as path from 'path'

@Module( {
    controllers: [],
    providers: [RolesService],
    imports: [
            ConfigModule.forRoot({
                envFilePath: '.env',
            }),
            SequelizeModule.forRoot({
              dialect: 'postgres',
              host: 'ec2-52-31-219-113.eu-west-1.compute.amazonaws.com',//process.env.POSTGRES_HOST,
              port: 5432, //Number(process.env.POSTGRES_PORT),
              username: 'vourrjzsmhtcpn', //process.env.POSTGRES_USER,
              password: '0a144c2055c9b8e25c2aaed6f94f64ac30c34d6832b559568080ff5a0a503676', //process.env.POSTGRES_PASSWORD,
              database: 'dc61uob1tnl54s',//process.env.POSTGRES_DATABASE,
              models: [User,Role,UserRoles,Post],
              autoLoadModels: true,
              native: true,
              ssl: true,
            }),
            UserModule,
            RolesModule,
            AuthModule,
            PostModule,
            FilesModule,
            ServeStaticModule.forRoot({
              rootPath: path.resolve(__dirname, 'static'),
            }),
    ]
})
export class AppModule {}