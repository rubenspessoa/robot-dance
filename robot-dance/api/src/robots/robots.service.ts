import {Injectable} from '@nestjs/common';
import {DeleteResult, Repository} from "typeorm";
import {InjectRepository} from "@nestjs/typeorm";
import {Robot} from "./robot.entity";
import {CreateRobotDto} from "./create-robot.dto";

@Injectable()
export class RobotsService {
    constructor(
        @InjectRepository(Robot)
        private readonly usersRepository: Repository<Robot>) {
    }

    findAll(): Promise<Robot[]> {
        return this.usersRepository.find();
    }

    findOneById(id: string): Promise<Robot> {
        return this.usersRepository.findOne(id);
    }

    async create(createRobotDTO: CreateRobotDto): Promise<Robot> {
        return this.usersRepository.save(createRobotDTO);
    }

    async update(id: string, updateRobotDTO: CreateRobotDto): Promise<Robot> {
        await this.usersRepository.update({id: +id}, updateRobotDTO);
        return this.findOneById(id);
    }

    async delete(id: string): Promise<DeleteResult> {
        return this.usersRepository.delete({id: +id});
    }
}
