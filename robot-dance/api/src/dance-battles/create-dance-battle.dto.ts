import {Robot} from "../robots/robot.entity";
import {IsNotEmpty, IsObject, ValidateNested} from "class-validator";

export class CreateDanceBattleDto {
    @IsObject()
    @IsNotEmpty()
    @ValidateNested()
    blueRobot: Robot

    @IsObject()
    @IsNotEmpty()
    @ValidateNested()
    redRobot: Robot

    @IsObject()
    @IsNotEmpty()
    @ValidateNested()
    winner: Robot
}