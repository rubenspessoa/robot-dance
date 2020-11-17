import { DanceBattlesService } from "./dance-battles.service";
import { DanceBattle } from "./dance-battle.entity";
import { CreateDanceBattleDto } from "./create-dance-battle.dto";
import { DeleteResult } from "typeorm";
export declare class DanceBattlesController {
    private readonly danceBattlesService;
    constructor(danceBattlesService: DanceBattlesService);
    getAllDanceBattles(): Promise<DanceBattle[]>;
    getDanceBattleById(id: string): Promise<DanceBattle>;
    createDanceBattle(createDanceBattleDTO: CreateDanceBattleDto): Promise<DanceBattle>;
    deleteDanceBattle(id: string): Promise<DeleteResult>;
}
