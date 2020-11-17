import {Module} from '@nestjs/common';
import {DanceOffsController} from './dance-offs.controller';
import {DanceOffsService} from './dance-offs.service';
import {TypeOrmModule} from "@nestjs/typeorm";
import {DanceOff} from "./dance-off.entity";
import {RobotsModule} from "../robots/robots.module";
import {DanceBattlesModule} from "../dance-battles/dance-battles.module";

@Module({
    imports: [
        TypeOrmModule.forFeature([DanceOff]),
        RobotsModule,
        DanceBattlesModule
    ],
    controllers: [DanceOffsController],
    providers: [DanceOffsService]
})
export class DanceOffsModule {
}
