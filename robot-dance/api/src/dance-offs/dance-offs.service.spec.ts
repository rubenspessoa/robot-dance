import {Test, TestingModule} from '@nestjs/testing';
import {DanceOffsService} from './dance-offs.service';

describe('DanceOffsService', () => {
    let service: DanceOffsService;

    beforeEach(async () => {
        const module: TestingModule = await Test.createTestingModule({
            providers: [DanceOffsService],
        }).compile();

        service = module.get<DanceOffsService>(DanceOffsService);
    });

    it('should be defined', () => {
        expect(service).toBeDefined();
    });
});
