import {Body, Controller, Delete, Get, Param, Post, Put} from '@nestjs/common';
import {RobotsService} from "./robots.service";
import {Robot} from "./robot.entity";
import {DeleteResult} from "typeorm";
import {CreateRobotDto} from "./createRobot.dto";

@Controller('robots')
export class RobotsController {
    constructor(private readonly robotsService: RobotsService) {
    }

    @Get('all')
    getAllRobots(): Promise<Robot[]> {
        return this.robotsService.findAll()
    }

    @Get(':id')
    getRobotById(@Param('id') id: string): Promise<Robot> {
        return this.robotsService.findOneById(id)
    }

    @Post()
    createRobot(@Body() createRobotDTO: CreateRobotDto): Promise<Robot> {
        return this.robotsService.create(createRobotDTO);
    }

    @Put(':id')
    updateRobot(@Param('id') id: string,
                @Body() updateRobotDTO: CreateRobotDto): Promise<Robot> {
        return this.robotsService.update(id, updateRobotDTO);
    }

    @Delete(':id')
    deleteRobot(@Param('id') id: string): Promise<DeleteResult> {
        return this.robotsService.delete(id);
    }
}
