import { DanceBattle } from "../dance-battles/dance-battle.entity";
import { DanceOff } from "../dance-offs/dance-off.entity";
export declare enum PowerMove {
    infameMoonwalk = "infameMoonwalk",
    rebolation = "rebolation",
    theGangnamStyle = "theGangnamStyle",
    theWoah = "theWoah",
    bodyRolls = "bodyRolls",
    twoSteps = "twoSteps",
    dougieDougie = "dougieDougie",
    electricSide = "electricSide",
    theBizMarkie = "theBizMarkie",
    theBustDown = "theBustDown"
}
export declare class Robot {
    id: number;
    name: string;
    powerMove: PowerMove;
    experience: number;
    outOfOrder: boolean;
    avatar: string;
    danceBattlesAsBlueRobot: DanceBattle[];
    danceBattlesAsRedRobot: DanceBattle[];
    danceBattlesWon: DanceBattle[];
    danceOffsAsRedTeam: DanceOff[];
    danceOffsAsBlueTeam: DanceOff[];
}
