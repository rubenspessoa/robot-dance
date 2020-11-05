import {Column, Entity, JoinTable, ManyToOne, OneToMany, PrimaryGeneratedColumn} from "typeorm";
import {DanceBattle} from "../dance-battles/dance-battle.entity";

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

@Entity('Robot')
export class Robot {
    @PrimaryGeneratedColumn()
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
        danceBattle => danceBattle.blueRobot,
        {cascade: true})
    danceBattlesAsBlueRobot: DanceBattle[]

    @OneToMany(
        type => DanceBattle,
        danceBattle => danceBattle.redRobot,
        {cascade: true})
    danceBattlesAsRedRobot: DanceBattle[]

    @OneToMany(
        type => DanceBattle,
        danceBattle => danceBattle.winner,
        {cascade: true})
    danceBattlesWon: DanceBattle[]
}
