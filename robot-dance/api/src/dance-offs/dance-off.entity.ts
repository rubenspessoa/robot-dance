import {Column, Entity, JoinTable, ManyToMany, OneToMany, PrimaryGeneratedColumn} from "typeorm";
import {Robot} from "../robots/robot.entity";
import {DanceBattle} from "../dance-battles/dance-battle.entity";

export enum Team {
    red = "red",
    blue = "blue"
}

@Entity()
export class DanceOff {
    @PrimaryGeneratedColumn()
    id: number

    @ManyToMany(type => Robot, robot => robot.danceOffsAsRedTeam)
    @JoinTable()
    redTeam: Robot[]

    @ManyToMany(type => Robot, robot => robot.danceOffsAsBlueTeam)
    @JoinTable()
    blueTeam: Robot[]

    @OneToMany(type => DanceBattle, danceBattle => danceBattle.partOfDanceOff)
    danceBattles: DanceBattle[]

    @Column()
    winningTeam: Team
}