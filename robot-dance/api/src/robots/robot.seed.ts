import {Injectable} from '@nestjs/common';
import {Command, Positional} from "nestjs-command";
import {RobotsService} from "./robots.service";
import {PowerMove} from "./robot.entity";

@Injectable()
export class RobotSeed {
    constructor(private readonly robotService: RobotsService) {
    }

    @Command({
        command: 'create:robot name',
        describe: 'create single robot',
        autoExit: true
    })
    async create(@Positional({
        name: 'name',
        describe: 'the name of the robot',
        type: 'string',
    }) name: string) {
        await this.robotService.create({
            name: name,
            powerMove: this.getRandomPowerMove(),
            experience: this.getRandomInteger(10),
            avatar: `https://robohash.org/${name}`
        })
    }

    @Command({
        command: 'create:robots',
        describe: 'create 10 random robots',
        autoExit: true
    })
    async createMultiple() {
        const names = [
            "Mail_Monster",
            "Plus_Settings",
            "Dog_Poop",
            "Elevator_Printer",
            "Urine_Running",
            "Kitty_Crab",
            "Fusion_Whale",
            "Nuclear_Rollers",
            "Drugs_BBQ",
            "Flowers_Trees"
        ]

        for (const name of names) {
            await this.create(name);
        }
    }

    private getRandomPowerMove(): PowerMove {
        const powerMoves = Object.keys(PowerMove);
        const randomIndex = this.getRandomInteger(powerMoves.length);
        return PowerMove[powerMoves[randomIndex]];
    }

    private getRandomInteger(max: number): number {
        return Math.floor(Math.random() * max)
    }
}
