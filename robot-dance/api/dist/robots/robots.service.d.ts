import { DeleteResult, Repository } from "typeorm";
import { Robot } from "./robot.entity";
import { CreateRobotDto } from "./create-robot.dto";
export declare class RobotsService {
    private readonly usersRepository;
    constructor(usersRepository: Repository<Robot>);
    findAll(): Promise<Robot[]>;
    findOneById(id: string): Promise<Robot>;
    create(createRobotDTO: CreateRobotDto): Promise<Robot>;
    update(id: string, updateRobotDTO: CreateRobotDto): Promise<Robot>;
    delete(id: string): Promise<DeleteResult>;
}
