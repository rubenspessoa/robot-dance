import { Robot } from "../robots/robot.entity";
import { DanceBattle } from "../dance-battles/dance-battle.entity";
export declare enum Team {
    red = "red",
    blue = "blue"
}
export declare class DanceOff {
    id: number;
    redTeam: Robot[];
    blueTeam: Robot[];
    danceBattles: DanceBattle[];
    winningTeam: Team;
}
