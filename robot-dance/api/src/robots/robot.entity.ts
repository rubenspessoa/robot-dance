import {Column, Entity, PrimaryGeneratedColumn} from "typeorm";

@Entity()
export class Robot {
    @PrimaryGeneratedColumn()
    id: number

    @Column()
    name: string

    @Column()
    powerMove: string

    @Column()
    experience: number

    @Column({ default: false})
    outOfOrder: boolean

    @Column()
    avatar: string
}
