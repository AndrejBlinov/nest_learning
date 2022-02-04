import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { FilesService } from 'src/files/files.service';
import { CreatePostDro } from './dto/create-post.rto';
import { Post } from './post.entity';

@Injectable()
export class PostService {

    constructor( 
        @InjectModel(Post) private postRepository: typeof Post,
        private fileService: FilesService
    ) {}

    async addPost (dto: CreatePostDro, image: any) {
        const fileName = await this.fileService.createFile(image);
        const post = await this.postRepository.create({...dto, image: fileName})
        return post;
    }
}
