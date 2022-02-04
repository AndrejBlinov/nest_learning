import { ApiProperty } from '@nestjs/swagger';
import { Column, DataType, Table, Model, BelongsTo, ForeignKey } from 'sequelize-typescript';
import { User } from 'src/user/user.entity';

interface PostCreateAttr {
    title: string;
    content: string;
    userId: number;
    image: string;
}

@Table({tableName: 'post'})
export class Post extends Model<Post,PostCreateAttr> {
    @ApiProperty({ example: '1', description: "Уникальный идентификатор" })
    @Column({type: DataType.INTEGER, unique: true, autoIncrement: true, primaryKey: true})
    id: number;

    @ApiProperty({ example: 'Новость 1', description: "Заголовок новости" })
    @Column({type: DataType.STRING})
    title: string;

    @ApiProperty({ example: 'Описание новости 1 детально', description: "Описание новости" })
    @Column({type: DataType.STRING, unique: true})
    content: string;

    @ApiProperty({ example: 'testImage.png', description: "Картинка к новости" })
    @Column({type: DataType.STRING, allowNull: false})
    image: string;

    @ForeignKey( () => User)
    @Column({type: DataType.INTEGER})
    userId:number;

    @BelongsTo( () => User)
    author: User;
}