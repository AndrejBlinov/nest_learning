import { ApiProperty } from '@nestjs/swagger';
import { User } from 'src/user/user.entity';
import { Roles } from './roles.entity';


export class UserRoles  {
    @ApiProperty({ example: '1', description: "Уникальный идентификатор" })

    public id: number;

    @ApiProperty({ example: '5', description: "ID пользователя" })

    public userId!: number;

    @ApiProperty({ example: '2', description: "ID группы" })

    public roleId!: number;

}