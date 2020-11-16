import { DanceOff } from "./dance-off.entity";
import { Repository } from "typeorm";
import { RobotsService } from "../robots/robots.service";
import { CreateDanceOffDto } from "./create-dance-off.dto";
import { DanceBattlesService } from "../dance-battles/dance-battles.service";
export declare class DanceOffsService {
    private readonly danceOffRepository;
    private readonly robotsService;
    private readonly danceBattleService;
    constructor(danceOffRepository: Repository<DanceOff>, robotsService: RobotsService, danceBattleService: DanceBattlesService);
    createDanceOffWithoutTeams(): Promise<DanceOff>;
    createDanceOffWithTeams(createDanceOffDto: CreateDanceOffDto): Promise<DanceOff>;
    private generateDanceOff;
    private createRandomDanceOffDTO;
    private generateTeam;
    private runBattles;
}
