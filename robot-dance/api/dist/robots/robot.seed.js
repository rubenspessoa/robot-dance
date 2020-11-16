"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.RobotSeed = void 0;
const common_1 = require("@nestjs/common");
const nestjs_command_1 = require("nestjs-command");
const robots_service_1 = require("./robots.service");
const robot_entity_1 = require("./robot.entity");
let RobotSeed = class RobotSeed {
    constructor(robotService) {
        this.robotService = robotService;
    }
    async create(name) {
        await this.robotService.create({
            name: name,
            powerMove: this.getRandomPowerMove(),
            experience: this.getRandomInteger(10),
            avatar: `https://robohash.org/${name}`
        });
    }
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
        ];
        for (const name of names) {
            await this.create(name);
        }
    }
    getRandomPowerMove() {
        const powerMoves = Object.keys(robot_entity_1.PowerMove);
        const randomIndex = this.getRandomInteger(powerMoves.length);
        return robot_entity_1.PowerMove[powerMoves[randomIndex]];
    }
    getRandomInteger(max) {
        return Math.floor(Math.random() * max);
    }
};
__decorate([
    nestjs_command_1.Command({
        command: 'create:robot name',
        describe: 'create single robot',
        autoExit: true
    }),
    __param(0, nestjs_command_1.Positional({
        name: 'name',
        describe: 'the name of the robot',
        type: 'string',
    })),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], RobotSeed.prototype, "create", null);
__decorate([
    nestjs_command_1.Command({
        command: 'create:robots',
        describe: 'create 10 random robots',
        autoExit: true
    }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], RobotSeed.prototype, "createMultiple", null);
RobotSeed = __decorate([
    common_1.Injectable(),
    __metadata("design:paramtypes", [robots_service_1.RobotsService])
], RobotSeed);
exports.RobotSeed = RobotSeed;
//# sourceMappingURL=robot.seed.js.map