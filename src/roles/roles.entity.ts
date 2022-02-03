import { ApiProperty } from '@nestjs/swagger';
import { Column, DataType, Table, Model } from 'sequelize-typescript';

interface RolesCreateAttr {
    name: string;
    value: number;
}

@Table({tableName: 'roles'})
export class Roles extends Model<Roles,RolesCreateAttr> {
    @ApiProperty({ example: '1', description: "Уникальный идентификатор роли" })
    @Column({type: DataType.INTEGER, unique: true, autoIncrement: true, primaryKey: true})
    id: number;

    @ApiProperty({ example: 'Администратор', description: "Наименование роли" })
    @Column({type: DataType.STRING})
    name: string;

    @ApiProperty({ example: '2', description: "Идентификатор роли" })
    @Column({type: DataType.STRING, allowNull: false, unique: true})
    value: number;
}