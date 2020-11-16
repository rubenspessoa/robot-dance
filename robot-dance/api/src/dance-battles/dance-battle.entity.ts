import {Column, Entity, JoinTable, ManyToMany, ManyToOne, OneToMany, PrimaryGeneratedColumn} from "typeorm";
import {Robot} from "../robots/robot.entity";
import {DanceOff, Team} from "../dance-offs/dance-off.entity";

@Entity()
export class DanceBattle {
    @PrimaryGeneratedColumn('uuid')
    id: number

    @ManyToOne(type => Robot, robot => robot.danceBattlesAsBlueRobot)
    blueRobot: Robot

    @ManyToOne(type => Robot, robot => robot.danceBattlesAsRedRobot)
    redRobot: Robot

    @ManyToOne(type => Robot, robot => robot.danceBattlesWon)
    winningRobot: Robot

    @Column()
    winningTeam: Team

    @ManyToOne(type => DanceOff, danceOff => danceOff.danceBattles)
    partOfDanceOff: DanceOff
}