import { ApiProperty } from '@nestjs/swagger';
import { Column, DataType, Table, Model, ForeignKey } from 'sequelize-typescript';
import { User } from 'src/user/user.entity';
import { Role } from './roles.entity';


@Table({tableName: 'user_roles', createdAt: false, updatedAt: false})
export class UserRoles extends Model<UserRoles> {
    @ApiProperty({ example: '1', description: "Уникальный идентификатор роли" })
    @Column({type: DataType.INTEGER, unique: true, autoIncrement: true, primaryKey: true})
    id: number;

    @ForeignKey(() => User)
    @ApiProperty({ example: '2', description: "ID пользователя" })
    @Column({type: DataType.INTEGER})
    userId: number;

    @ForeignKey(() => Role)
    @ApiProperty({ example: 2, description: "ID роли" })
    @Column({type: DataType.INTEGER})
    rolesId: number;
}