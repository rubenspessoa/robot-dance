import {Test, TestingModule} from '@nestjs/testing';
import {DanceBattlesService} from './dance-battles.service';

describe('DanceBattlesService', () => {
    let service: DanceBattlesService;

    beforeEach(async () => {
        const module: TestingModule = await Test.createTestingModule({
            providers: [DanceBattlesService],
        }).compile();

        service = module.get<DanceBattlesService>(DanceBattlesService);
    });

    it('should be defined', () => {
        expect(service).toBeDefined();
    });
});
