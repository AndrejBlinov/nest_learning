import { Body, Controller, Get, Post } from "@nestjs/common";
import { UserService } from "./user/user.service";
import { AppService } from "./app.service";
import { User } from "./user/user.entity";
import { createUserDto } from "./user/dto/create-user-dto";
import { ApiOperation, ApiResponse } from "@nestjs/swagger";

@Controller('/api')
export class AppController {

    constructor () {}
}