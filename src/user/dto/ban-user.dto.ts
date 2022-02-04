import { ApiProperty } from "@nestjs/swagger";

export class banUserDto {
    @ApiProperty({ example: '23', description: "ID пользователя" })
    readonly userId: number;

    @ApiProperty({ example: 'Плохой мальчик', description: "Причина блокировки" })
    readonly banReason: string;
}