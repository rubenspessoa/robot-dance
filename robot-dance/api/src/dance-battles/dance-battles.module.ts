import {Module} from '@nestjs/common';
import {DanceBattlesController} from './dance-battles.controller';
import {DanceBattlesService} from './dance-battles.service';
import {TypeOrmModule} from "@nestjs/typeorm";
import {DanceBattle} from "./dance-battle.entity";

@Module({
    imports: [TypeOrmModule.forFeature([DanceBattle])],
    controllers: [DanceBattlesController],
    providers: [DanceBattlesService],
    exports: [DanceBattlesService]
})
export class DanceBattlesModule {}
