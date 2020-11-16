import { Robot } from "../robots/robot.entity";
import { DanceOff, Team } from "../dance-offs/dance-off.entity";
export declare class DanceBattle {
    id: number;
    blueRobot: Robot;
    redRobot: Robot;
    winningRobot: Robot;
    winningTeam: Team;
    partOfDanceOff: DanceOff;
}
