import {Column, Entity, PrimaryGeneratedColumn} from "typeorm";

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
}
