import {Body, Controller, Get, Param, Post} from '@nestjs/common';
import {DanceOffsService} from "./dance-offs.service";
import {CreateDanceOffDto} from "./create-dance-off.dto";
import {DanceOff} from "./dance-off.entity";

@Controller('dance-offs')
export class DanceOffsController {
    constructor(private readonly danceOffsService: DanceOffsService) {
    }

    @Get('all')
    findAll(): Promise<DanceOff[]> {
        return this.danceOffsService.findAll()
    }

    @Get(':id')
    findById(@Param('id') id: number): Promise<DanceOff> {
        return this.danceOffsService.findOneById(id)
    }

    @Post()
    createDanceOffWithoutTeams(): Promise<DanceOff> {
        return this.danceOffsService.createDanceOffWithoutTeams()
    }

    @Post('with-teams')
    createDanceOffWithTeams(@Body() createDanceOffDTO: CreateDanceOffDto): Promise<DanceOff> {
        return this.danceOffsService.createDanceOffWithTeams(createDanceOffDTO)
    }
}
