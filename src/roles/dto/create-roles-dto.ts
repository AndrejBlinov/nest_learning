import { ApiProperty } from "@nestjs/swagger";

export class createRolesDto {
    @ApiProperty({ example: '2', description: "Идентификатор роли" })
    readonly value: number;

    @ApiProperty({ example: 'Администратор', description: "Значение роли пользователя" })
    readonly name: string;
}
