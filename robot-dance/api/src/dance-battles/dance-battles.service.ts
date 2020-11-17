import {Injectable} from '@nestjs/common';
import {InjectRepository} from "@nestjs/typeorm";
import {DanceBattle} from "./dance-battle.entity";
import {DeleteResult, Repository} from "typeorm";
import {CreateDanceBattleDto} from "./create-dance-battle.dto";
import {PowerMove, Robot} from "../robots/robot.entity";
import {Team} from "../dance-offs/dance-off.entity";

@Injectable()
export class DanceBattlesService {
    constructor(
        @InjectRepository(DanceBattle)
        private readonly danceBattlesRepository: Repository<DanceBattle>
    ) {
    }

    async findAll(): Promise<DanceBattle[]> {
        return this.danceBattlesRepository.find({ relations: ["redRobot", "blueRobot", "partOfDanceOff"]});
    }

    async findById(id: string): Promise<DanceBattle> {
        return this.danceBattlesRepository.findOne(id, { relations: ["redRobot", "blueRobot", "partOfDanceOff"]});
    }

    async create(createDanceBattleDTO: CreateDanceBattleDto): Promise<DanceBattle> {
        const {winningTeam, winningRobot} = this.getWinner(createDanceBattleDTO.blueRobot, createDanceBattleDTO.redRobot);
        const danceBattle = new DanceBattle()
        danceBattle.blueRobot = createDanceBattleDTO.blueRobot;
        danceBattle.redRobot = createDanceBattleDTO.redRobot;
        danceBattle.winningTeam = winningTeam
        danceBattle.winningRobot = winningRobot
        return this.danceBattlesRepository.save(danceBattle);
    }

    async delete(id: string): Promise<DeleteResult> {
        return this.danceBattlesRepository.delete({id: +id});
    }

    private getWinner(blueRobot: Robot, redRobot: Robot): { winningTeam: Team, winningRobot: Robot } {
        const powerMoveWeights: { [powerMove: string]: number } = {};

        Object.keys(PowerMove).forEach(powerMove => {
            powerMoveWeights[powerMove] = Math.random()
        })

        const blueDamage = blueRobot.experience * powerMoveWeights[blueRobot.powerMove]
        const redDamage = redRobot.experience * powerMoveWeights[redRobot.powerMove]

        const blueTeamWon = { winningTeam: Team.blue, winningRobot: blueRobot}
        const redTeamWon = { winningTeam: Team.red, winningRobot: redRobot}

        if (blueDamage > redDamage) {
            return blueTeamWon
        }

        if (blueDamage < redDamage){
            return redTeamWon
        }

        if (blueRobot.experience > redRobot.experience) {
            return blueTeamWon
        }

        if (blueRobot.experience < redRobot.experience) {
            return redTeamWon
        }

        return Math.floor(Math.random() * 2) === 0 ? blueTeamWon : redTeamWon
    }
}
