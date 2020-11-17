import {Injectable} from '@nestjs/common';
import {Repository} from "typeorm";
import {InjectRepository} from "@nestjs/typeorm";
import {Robot} from "./robot.entity";
import {CreateRobotDto} from "./create-robot.dto";

@Injectable()
export class RobotsService {
    constructor(
        @InjectRepository(Robot)
        private readonly robotsRepository: Repository<Robot>) {
    }

    async findAll(): Promise<Robot[]> {
        return this.robotsRepository.find({relations: ["danceBattlesAsBlueRobot", "danceBattlesAsRedRobot", "danceBattlesWon", "danceOffsAsRedTeam", "danceOffsAsBlueTeam"]});
    }

    async findOneById(id: string): Promise<Robot> {
        return this.robotsRepository.findOne(id, {relations: ["danceBattlesAsBlueRobot", "danceBattlesAsRedRobot", "danceBattlesWon", "danceOffsAsRedTeam", "danceOffsAsBlueTeam"]});
    }

    async create(createRobotDTO: CreateRobotDto): Promise<Robot> {
        return this.robotsRepository.save(createRobotDTO);
    }

    async update(id: string, updateRobotDTO: CreateRobotDto): Promise<Robot> {
        await this.robotsRepository.update(id, updateRobotDTO);
        return this.findOneById(id);
    }

    async delete(id: string): Promise<void> {
        const robot = await this.robotsRepository.findOne(id, {relations: ["danceBattlesAsBlueRobot", "danceBattlesAsRedRobot", "danceBattlesWon", "danceOffsAsRedTeam", "danceOffsAsBlueTeam"]})
        await this.robotsRepository.remove(robot, {});
    }
}
