import {Test, TestingModule} from '@nestjs/testing';
import {DanceBattlesController} from './dance-battles.controller';

describe('DanceBattlesController', () => {
    let controller: DanceBattlesController;

    beforeEach(async () => {
        const module: TestingModule = await Test.createTestingModule({
            controllers: [DanceBattlesController],
        }).compile();

        controller = module.get<DanceBattlesController>(DanceBattlesController);
    });

    it('should be defined', () => {
        expect(controller).toBeDefined();
    });
});
