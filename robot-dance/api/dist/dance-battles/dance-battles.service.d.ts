import { DanceBattle } from "./dance-battle.entity";
import { DeleteResult, Repository } from "typeorm";
import { CreateDanceBattleDto } from "./create-dance-battle.dto";
export declare class DanceBattlesService {
    private readonly danceBattlesRepository;
    constructor(danceBattlesRepository: Repository<DanceBattle>);
    findAll(): Promise<DanceBattle[]>;
    findById(id: string): Promise<DanceBattle>;
    create(createDanceBattleDTO: CreateDanceBattleDto): Promise<DanceBattle>;
    delete(id: string): Promise<DeleteResult>;
    private getWinner;
}
