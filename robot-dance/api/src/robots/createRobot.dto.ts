import {IsNotEmpty, IsNumber, IsString, IsUrl} from 'class-validator';

export class CreateRobotDto {
    @IsString()
    @IsNotEmpty()
    name: string

    @IsString()
    @IsNotEmpty()
    powerMove: string

    @IsNumber({allowInfinity: false, allowNaN: false, maxDecimalPlaces: 0})
    @IsNotEmpty()
    experience: number

    @IsString()
    @IsNotEmpty()
    @IsUrl()
    avatar: string
}