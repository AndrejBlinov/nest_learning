import { ApiProperty } from "@nestjs/swagger";


export class CreatePostDro {
    @ApiProperty({ example: 'Новость 1', description: "Заголовок новости" })
    readonly title:string;

    @ApiProperty({ example: 'Описание новости 1 детально', description: "Описание новости" })
    readonly content:string;

    @ApiProperty({ example: '2', description: "ID пользователя создавшего новость" })
    readonly userId: number
}