import { RobotsService } from "./robots.service";
import { Robot } from "./robot.entity";
import { CreateRobotDto } from "./create-robot.dto";
export declare class RobotsController {
    private readonly robotsService;
    constructor(robotsService: RobotsService);
    getAllRobots(): Promise<Robot[]>;
    getRobotById(id: string): Promise<Robot>;
    createRobot(createRobotDTO: CreateRobotDto): Promise<Robot>;
    updateRobot(id: string, updateRobotDTO: CreateRobotDto): Promise<Robot>;
    deleteRobot(id: string): Promise<void>;
}
