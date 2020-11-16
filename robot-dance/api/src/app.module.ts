import {Module} from '@nestjs/common';
import {RobotsModule} from "./robots/robots.module";
import {TypeOrmModule} from "@nestjs/typeorm";
import {Connection} from "typeorm";
import {DanceBattlesModule} from './dance-battles/dance-battles.module';
import {DanceOffsModule} from './dance-offs/dance-offs.module';
import {Robot} from "./robots/robot.entity";
import {DanceBattle} from "./dance-battles/dance-battle.entity";
import {DanceOff} from "./dance-offs/dance-off.entity";
import {ConfigModule, ConfigService} from "@nestjs/config";

const configService = new ConfigService();

@Module({
    imports: [
        ConfigModule.forRoot({isGlobal: true}),
        TypeOrmModule.forRoot({
            "type": "sqlite",
            "database": "database.db",
            "logging": false,
            "synchronize": configService.get<boolean>('SHOULD_SYNCHRONISE'),
            "entities": [Robot, DanceBattle, DanceOff]
        }),
        RobotsModule,
        DanceBattlesModule,
        DanceOffsModule
    ],
    controllers: [],
    providers: [],
})
export class AppModule {
    constructor(private connection: Connection) {
    }
}
