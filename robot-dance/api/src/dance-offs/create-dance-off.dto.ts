import {Robot} from "../robots/robot.entity";
import {IsArray, IsEnum, IsNotEmpty, ValidateNested} from "class-validator";


export class CreateDanceOffDto {
    @IsArray()
    @IsNotEmpty()
    @ValidateNested()
    redTeam: Robot[]

    @IsArray()
    @IsNotEmpty()
    @ValidateNested()
    blueTeam: Robot[]
}