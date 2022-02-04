import { ApiProperty } from "@nestjs/swagger";
import { IsEmail, IsString, Length } from "class-validator";

export class createUserDto {
    @ApiProperty({ example: 'Вася12653_', description: "Пароль пользователя" })
    @IsString( {message: 'Должно быть строкой'} )
    @Length(5,10, {message: "Длинна пароля должна составлять от 5 до 10 символов."})
    readonly password: string;

    @ApiProperty({ example: 'Вася12653_', description: "Уникальный логин пользователя. Длинна до 20 символов." })
    @IsString( {message: 'Должно быть строкой'} )
    @Length(5,10, {message: "Длинна login должна составлять от 5 до 10 символов."})
    readonly login: string;

    @ApiProperty({ example: 'test@test.test', description: "Email пользователя" })
    @IsString( {message: 'Должно быть строкой'} )
    @IsEmail( {}, {message: 'Не корректный формат email.'})
    readonly email: string;


}
