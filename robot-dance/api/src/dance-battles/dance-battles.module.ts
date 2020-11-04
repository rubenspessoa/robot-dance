import {Module} from '@nestjs/common';
import {DanceBattlesController} from './dance-battles.controller';
import {DanceBattlesService} from './dance-battles.service';

@Module({
    controllers: [DanceBattlesController],
    providers: [DanceBattlesService]
})
export class DanceBattlesModule {
}
