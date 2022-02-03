import { ApiProperty } from '@nestjs/swagger';
import { User } from 'src/user/user.entity';
import { UserRoles } from './user-roles-entity';



export class Roles  {
    @ApiProperty({ example: '1', description: "Уникальный идентификатор роли" })
    id: number;

    @ApiProperty({ example: 'Администратор', description: "Наименование роли" })
    name: string;

    @ApiProperty({ example: '2', description: "Идентификатор роли" })
    value: number;

}