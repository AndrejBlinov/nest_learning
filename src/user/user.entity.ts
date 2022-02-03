import { ApiProperty } from '@nestjs/swagger';
import { Column, DataType, Table, Model } from 'sequelize-typescript';

interface UserCreateAttr {
    login: string;
    password: string;
}

@Table({tableName: 'user'})
export class User extends Model<User,UserCreateAttr> {
    @ApiProperty({ example: '1', description: "Уникальный идентификатор" })
    @Column({type: DataType.INTEGER, unique: true, autoIncrement: true, primaryKey: true})
    id: number;

    @ApiProperty({ example: 'Вася', description: "Имя пользователя (ФИО)" })
    @Column({type: DataType.STRING})
    name: string;

    @ApiProperty({ example: 'Вася12653_', description: "Уникальный логин пользователя. Длинна 10 символов." })
    @Column({type: DataType.STRING, unique: true})
    login: string;

    @ApiProperty({ example: 'Вася12653_', description: "Пароль пользователя" })
    @Column({type: DataType.STRING, allowNull: false})
    password: string;

    @ApiProperty({ example: 'Вася12@yandex.ru', description: "Почтовый ящик польователя" })
    @Column({type: DataType.STRING, allowNull: false})
    email: string;

    @ApiProperty({ example: 'true/false', description: "boolean идентификатор блокировки пользователя." })
    @Column({type: DataType.BOOLEAN, defaultValue: false})
    banned: boolean;

    @ApiProperty({ example: 'Плохое поведение', description: "Причина блокировки. Строка" })
    @Column({type: DataType.STRING, allowNull: false, defaultValue: ""})
    bannedReason: string;
}