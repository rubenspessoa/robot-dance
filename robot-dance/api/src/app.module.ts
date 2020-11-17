import {DanceBattle} from './dance-battles/dance-battle.entity';
import {DanceBattlesModule} from './dance-battles/dance-battles.module';
import {DanceOff} from './dance-offs/dance-off.entity';
import {DanceOffsModule} from './dance-offs/dance-offs.module';
import {Robot} from './robots/robot.entity';
import {RobotsModule} from './robots/robots.module';
import {Module} from '@nestjs/common';
import {ConfigModule, ConfigService} from '@nestjs/config';
import {TypeOrmModule} from '@nestjs/typeorm';
import {Connection} from 'typeorm';

const configService = new ConfigService();

@Module({
    imports: [
        ConfigModule.forRoot({isGlobal: true}),
        TypeOrmModule.forRoot({
            type: 'mysql',
            host: 'localhost',
            port: 3306,
            username: 'root',
            password: 'robotdance',
            database: 'robot_dance',
            logging: configService.get<boolean>('LOGGING'),
            synchronize: configService.get<boolean>('SYNCHRONIZE'),
            entities: [Robot, DanceBattle, DanceOff],
        }),
        RobotsModule,
        DanceBattlesModule,
        DanceOffsModule,
    ],
    controllers: [],
    providers: [],
})
export class AppModule {
    constructor(private connection: Connection) {
    }
}
