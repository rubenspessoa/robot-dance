import {Module} from '@nestjs/common';
import {DanceOffsController} from './dance-offs.controller';
import {DanceOffsService} from './dance-offs.service';

@Module({
    controllers: [DanceOffsController],
    providers: [DanceOffsService]
})
export class DanceOffsModule {
}
