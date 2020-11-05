import {Body, Controller, Delete, Get, Param, Post} from '@nestjs/common';
import {DanceBattlesService} from "./dance-battles.service";
import {DanceBattle} from "./dance-battle.entity";
import {CreateDanceBattleDto} from "./create-dance-battle.dto";
import {DeleteResult} from "typeorm";

@Controller('dance-battles')
export class DanceBattlesController {
    constructor(private readonly danceBattlesService: DanceBattlesService) {
    }

    @Get('all')
    getAllDanceBattles(): Promise<DanceBattle[]> {
        return this.danceBattlesService.findAll();
    }

    @Get(':id')
    getDanceBattleById(@Param('id') id: string): Promise<DanceBattle> {
        return this.danceBattlesService.findById(id)
    }

    @Post()
    createDanceBattle(@Body() createDanceBattleDTO: CreateDanceBattleDto): Promise<DanceBattle> {
        return this.danceBattlesService.create(createDanceBattleDTO);
    }

    @Delete(':id')
    deleteDanceBattle(@Param('id') id: string): Promise<DeleteResult> {
        return this.danceBattlesService.delete(id);
    }
}
