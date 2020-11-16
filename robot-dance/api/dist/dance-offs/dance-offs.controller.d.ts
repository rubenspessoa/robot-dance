import { DanceOffsService } from "./dance-offs.service";
import { CreateDanceOffDto } from "./create-dance-off.dto";
import { DanceOff } from "./dance-off.entity";
export declare class DanceOffsController {
    private readonly danceOffsService;
    constructor(danceOffsService: DanceOffsService);
    createDanceOffWithoutTeams(): Promise<DanceOff>;
    createDanceOffWithTeams(createDanceOffDTO: CreateDanceOffDto): Promise<DanceOff>;
}
