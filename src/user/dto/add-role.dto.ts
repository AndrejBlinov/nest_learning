import { ApiProperty } from "@nestjs/swagger";

export class addRoleDto {
    @ApiProperty({ example: '2', description: "ID роли" })
    readonly value: string;

    @ApiProperty({ example: '54', description: "ID пользователя" })
    readonly userId: number;
}