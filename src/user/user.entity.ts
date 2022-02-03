import { ApiProperty } from '@nestjs/swagger';
import { Roles } from 'src/roles/roles.entity';
import { UserRoles } from 'src/roles/user-roles-entity';

export class User  {
    @ApiProperty({ example: '1', description: "Уникальный идентификатор" })
    id: number;

    @ApiProperty({ example: 'Вася', description: "Имя пользователя (ФИО)" })
    name: string;

    @ApiProperty({ example: 'Вася12653_', description: "Уникальный логин пользователя. Длинна 10 символов." })
    login: string;

    @ApiProperty({ example: 'Вася12653_', description: "Пароль пользователя" })
    password: string;

    @ApiProperty({ example: 'Вася12@yandex.ru', description: "Почтовый ящик польователя" })
    email: string;

    @ApiProperty({ example: 'true/false', description: "boolean идентификатор блокировки пользователя." })
    banned: boolean;

    @ApiProperty({ example: 'Плохое поведение', description: "Причина блокировки. Строка" })
    bannedReason: string;
}