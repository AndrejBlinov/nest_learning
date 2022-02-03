import { ApiProperty } from "@nestjs/swagger";

export class createUserDto {
    @ApiProperty({ example: 'Вася12653_', description: "Пароль пользователя" })
    readonly password: string;

    @ApiProperty({ example: 'Вася12653_', description: "Уникальный логин пользователя. Длинна до 20 символов." })
    readonly login: string;

}
