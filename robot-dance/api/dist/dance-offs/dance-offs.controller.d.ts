import { DanceOffsService } from "./dance-offs.service";
import { CreateDanceOffDto } from "./create-dance-off.dto";
import { DanceOff } from "./dance-off.entity";
export declare class DanceOffsController {
    private readonly danceOffsService;
    constructor(danceOffsService: DanceOffsService);
    findAll(): Promise<DanceOff[]>;
    findById(id: number): Promise<DanceOff>;
    createDanceOffWithoutTeams(): Promise<DanceOff>;
    createDanceOffWithTeams(createDanceOffDTO: CreateDanceOffDto): Promise<DanceOff>;
}
