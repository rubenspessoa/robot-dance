import { RobotsService } from "./robots.service";
export declare class RobotSeed {
    private readonly robotService;
    constructor(robotService: RobotsService);
    create(name: string): Promise<void>;
    createMultiple(): Promise<void>;
    private getRandomPowerMove;
    private getRandomInteger;
}
