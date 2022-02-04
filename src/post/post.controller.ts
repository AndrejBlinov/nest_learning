import { Body, Controller, Get, Post, Delete, UseGuards, UsePipes, UploadedFile, UseInterceptors } from "@nestjs/common";
import { FileInterceptor } from "@nestjs/platform-express";
import { ApiTags } from '@nestjs/swagger';
import { CreatePostDro } from "./dto/create-post.rto";
import { PostService } from "./post.service";


@ApiTags('Посты пользователей')
@Controller('/api/post')
export class PostController {

    constructor( private postService: PostService) {}

    @Post('/')
    @UseInterceptors(FileInterceptor('image'))
    addPost(@Body() dto: CreatePostDro, @UploadedFile() image) {
        return this.postService.addPost(dto, image);
    }
}
