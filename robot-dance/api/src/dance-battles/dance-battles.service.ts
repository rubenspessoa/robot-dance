import {Injectable} from '@nestjs/common';
import {InjectRepository} from "@nestjs/typeorm";
import {DanceBattle} from "./dance-battle.entity";
import {DeleteResult, Repository} from "typeorm";
import {CreateDanceBattleDto} from "./create-dance-battle.dto";

@Injectable()
export class DanceBattlesService {
    constructor(
        @InjectRepository(DanceBattle)
        private readonly danceBattlesRepository: Repository<DanceBattle>
    ) {}

    findAll(): Promise<DanceBattle[]> {
        return this.danceBattlesRepository.find();
    }

    findById(id: string): Promise<DanceBattle> {
        return this.danceBattlesRepository.findOne(id);
    }

    async create(createDanceBattleDTO: CreateDanceBattleDto): Promise<DanceBattle> {
        return this.danceBattlesRepository.save(createDanceBattleDTO);
    }

    async delete(id: string): Promise<DeleteResult> {
        return this.danceBattlesRepository.delete({id: +id});
    }
}
