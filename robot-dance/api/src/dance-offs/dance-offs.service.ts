import {Injectable} from '@nestjs/common';
import {InjectRepository} from "@nestjs/typeorm";
import {DanceOff, Team} from "./dance-off.entity";
import {Repository} from "typeorm";
import {RobotsService} from "../robots/robots.service";
import {Robot} from "../robots/robot.entity";
import {CreateDanceOffDto} from "./create-dance-off.dto";
import {DanceBattlesService} from "../dance-battles/dance-battles.service";
import {DanceBattle} from "../dance-battles/dance-battle.entity";
import {CreateDanceBattleDto} from "../dance-battles/create-dance-battle.dto";

@Injectable()
export class DanceOffsService {
    constructor(
        @InjectRepository(DanceOff)
        private readonly danceOffRepository: Repository<DanceOff>,
        private readonly robotsService: RobotsService,
        private readonly danceBattleService: DanceBattlesService,
    ) {
    }

    async createDanceOffWithoutTeams(): Promise<DanceOff> {
        const allRobots = await this.robotsService.findAll();
        const createDanceOffDto = await this.createRandomDanceOffDTO(allRobots);
        const danceOff = await this.generateDanceOff(createDanceOffDto);
        return this.danceOffRepository.save(danceOff);
    }

    async createDanceOffWithTeams(createDanceOffDto: CreateDanceOffDto): Promise<DanceOff> {
        const danceOff = await this.generateDanceOff(createDanceOffDto);
        return this.danceOffRepository.save(danceOff);
    }

    private async generateDanceOff(createDanceOffDto: CreateDanceOffDto): Promise<DanceOff> {
        const {danceBattleResults, winningTeam} = await this.runBattles(createDanceOffDto);
        const danceOff = new DanceOff()
        danceOff.blueTeam = createDanceOffDto.blueTeam
        danceOff.redTeam = createDanceOffDto.redTeam
        danceOff.danceBattles = danceBattleResults
        danceOff.winningTeam = winningTeam
        return danceOff
    }

    private createRandomDanceOffDTO(allRobots: Robot[]): CreateDanceOffDto {
        const generatedBlueTeam = this.generateTeam(allRobots);
        const generatedRedTeam = this.generateTeam(generatedBlueTeam.remainingRobots);

        return {redTeam: generatedRedTeam.newTeam, blueTeam: generatedBlueTeam.newTeam}
    }

    private generateTeam(allRobots: Robot[]): { newTeam: Robot[], remainingRobots: Robot[] } {
        let remainingRobots = allRobots;
        const newTeam: Robot[] = []
        while (newTeam.length < 5) {
            const index = Math.floor(Math.random() * remainingRobots.length);
            const randomSelectedRobot = remainingRobots[index];
            newTeam.push(randomSelectedRobot);
            remainingRobots = remainingRobots.filter(robot => robot.id !== randomSelectedRobot.id);
        }
        return {newTeam: newTeam, remainingRobots: remainingRobots}
    }

    private async runBattles(createDanceOffDto: CreateDanceOffDto):
        Promise<{ danceBattleResults: DanceBattle[], winningTeam: Team }> {
        const {redTeam, blueTeam} = createDanceOffDto
        const danceBattlesResults: DanceBattle[] = []

        for (let i = 0; i < redTeam.length; i++) {
            const createDanceBattleDto = new CreateDanceBattleDto()
            createDanceBattleDto.redRobot = redTeam[i]
            createDanceBattleDto.blueRobot = blueTeam[i]
            const danceBattleResult = await this.danceBattleService.create(createDanceBattleDto)
            danceBattlesResults.push(danceBattleResult)
        }

        let blueTeamVictories = 0
        let redTeamVictories = 0

        danceBattlesResults.forEach(danceBattle => {
            danceBattle.winningTeam === Team.blue ? blueTeamVictories++ : redTeamVictories++
        })

        let winningTeam: Team | undefined = undefined

        if (blueTeamVictories !== redTeamVictories) {
            winningTeam = blueTeamVictories >= redTeamVictories ? Team.blue : Team.red
        } else {
            winningTeam = Math.floor(Math.random() * 2) === 0 ? Team.blue : Team.red
        }

        return {
            danceBattleResults: danceBattlesResults,
            winningTeam: winningTeam
        }
    }
}
