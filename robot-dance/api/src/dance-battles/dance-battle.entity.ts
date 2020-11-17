import {Column, Entity, ManyToOne, PrimaryGeneratedColumn} from "typeorm";
import {Robot} from "../robots/robot.entity";
import {DanceOff, Team} from "../dance-offs/dance-off.entity";

@Entity()
export class DanceBattle {
    @PrimaryGeneratedColumn('uuid')
    id: number

    @ManyToOne(
        type => Robot,
        robot => robot.danceBattlesAsBlueRobot,
        {onDelete: "CASCADE"})
    blueRobot: Robot

    @ManyToOne(
        type => Robot,
        robot => robot.danceBattlesAsRedRobot,
        {onDelete: "CASCADE"})
    redRobot: Robot

    @ManyToOne(
        type => Robot,
        robot => robot.danceBattlesWon,
        {onDelete: "CASCADE"})
    winningRobot: Robot

    @Column()
    winningTeam: Team

    @ManyToOne(
        type => DanceOff,
        danceOff => danceOff.danceBattles)
    partOfDanceOff: DanceOff
}