import {Column, Entity, JoinTable, ManyToMany, ManyToOne, OneToMany, PrimaryGeneratedColumn} from "typeorm";
import {Robot} from "../robots/robot.entity";
import {DanceOff, Team} from "../dance-offs/dance-off.entity";

@Entity()
export class DanceBattle {
    @PrimaryGeneratedColumn()
    id: number

    @ManyToOne(type => Robot, robot => robot.danceBattlesAsBlueRobot, {eager: true})
    blueRobot: Robot

    @ManyToOne(type => Robot, robot => robot.danceBattlesAsRedRobot, {eager: true})
    redRobot: Robot

    @ManyToOne(type => Robot, robot => robot.danceBattlesWon, {eager: true})
    winningRobot: Robot

    @Column()
    winningTeam: Team

    @ManyToOne(type => DanceOff, danceOff => danceOff.danceBattles)
    partOfDanceOff: DanceOff
}