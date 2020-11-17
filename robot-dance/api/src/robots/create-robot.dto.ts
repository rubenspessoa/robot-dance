import {IsEnum, IsNotEmpty, IsNumber, IsString, IsUrl} from 'class-validator';
import {PowerMove} from "./robot.entity";

export class CreateRobotDto {
    @IsString()
    @IsNotEmpty()
    name: string

    @IsEnum(PowerMove)
    @IsNotEmpty()
    powerMove: PowerMove

    @IsNumber({allowInfinity: false, allowNaN: false, maxDecimalPlaces: 0})
    @IsNotEmpty()
    experience: number

    @IsString()
    @IsNotEmpty()
    @IsUrl()
    avatar: string
}