import {Module} from '@nestjs/common';
import {RobotsController} from "./robots.controller";
import {RobotsService} from "./robots.service";
import {TypeOrmModule} from "@nestjs/typeorm";
import {Robot} from "./robot.entity";
import {CommandModule} from "nestjs-command";
import {RobotSeed} from "./robot.seed";

@Module({
    imports: [
        TypeOrmModule.forFeature([Robot]),
        CommandModule],
    controllers: [RobotsController],
    providers: [RobotsService, RobotSeed],
    exports: [RobotSeed]
})
export class RobotsModule {
}