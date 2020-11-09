import {Body, Controller, Post} from '@nestjs/common';
import {DanceOffsService} from "./dance-offs.service";
import {CreateDanceOffDto} from "./create-dance-off.dto";
import {DanceOff} from "./dance-off.entity";

@Controller('dance-offs')
export class DanceOffsController {
    constructor(private readonly danceOffsService: DanceOffsService) {
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
