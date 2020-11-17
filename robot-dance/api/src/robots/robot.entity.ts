import {Column, Entity, ManyToMany, OneToMany, PrimaryGeneratedColumn} from "typeorm";
import {DanceBattle} from "../dance-battles/dance-battle.entity";
import {DanceOff} from "../dance-offs/dance-off.entity";

export enum PowerMove {
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

@Entity()
export class Robot {
    @PrimaryGeneratedColumn('uuid')
    id: number

    @Column()
    name: string

    @Column()
    powerMove: PowerMove

    @Column()
    experience: number

    @Column({default: false})
    outOfOrder: boolean

    @Column()
    avatar: string

    @OneToMany(
        type => DanceBattle,
        danceBattle => danceBattle.blueRobot)
    danceBattlesAsBlueRobot: DanceBattle[]

    @OneToMany(
        type => DanceBattle,
        danceBattle => danceBattle.redRobot)
    danceBattlesAsRedRobot: DanceBattle[]

    @OneToMany(
        type => DanceBattle,
        danceBattle => danceBattle.winningRobot)
    danceBattlesWon: DanceBattle[]

    @ManyToMany(type => DanceOff, danceOff => danceOff.redTeam)
    danceOffsAsRedTeam: DanceOff[]

    @ManyToMany(type => DanceOff, danceOff => danceOff.blueTeam)
    danceOffsAsBlueTeam: DanceOff[]

}
