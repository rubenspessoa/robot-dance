import {Test, TestingModule} from '@nestjs/testing';
import {DanceOffsController} from './dance-offs.controller';

describe('DanceOffsController', () => {
    let controller: DanceOffsController;

    beforeEach(async () => {
        const module: TestingModule = await Test.createTestingModule({
            controllers: [DanceOffsController],
        }).compile();

        controller = module.get<DanceOffsController>(DanceOffsController);
    });

    it('should be defined', () => {
        expect(controller).toBeDefined();
    });
});
