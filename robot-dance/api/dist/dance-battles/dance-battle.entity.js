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
Object.defineProperty(exports, "__esModule", { value: true });
exports.DanceBattle = void 0;
const typeorm_1 = require("typeorm");
const robot_entity_1 = require("../robots/robot.entity");
const dance_off_entity_1 = require("../dance-offs/dance-off.entity");
let DanceBattle = class DanceBattle {
};
__decorate([
    typeorm_1.PrimaryGeneratedColumn(),
    __metadata("design:type", Number)
], DanceBattle.prototype, "id", void 0);
__decorate([
    typeorm_1.ManyToOne(type => robot_entity_1.Robot, robot => robot.danceBattlesAsBlueRobot, { eager: true }),
    __metadata("design:type", robot_entity_1.Robot)
], DanceBattle.prototype, "blueRobot", void 0);
__decorate([
    typeorm_1.ManyToOne(type => robot_entity_1.Robot, robot => robot.danceBattlesAsRedRobot, { eager: true }),
    __metadata("design:type", robot_entity_1.Robot)
], DanceBattle.prototype, "redRobot", void 0);
__decorate([
    typeorm_1.ManyToOne(type => robot_entity_1.Robot, robot => robot.danceBattlesWon, { eager: true }),
    __metadata("design:type", robot_entity_1.Robot)
], DanceBattle.prototype, "winningRobot", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], DanceBattle.prototype, "winningTeam", void 0);
__decorate([
    typeorm_1.ManyToOne(type => dance_off_entity_1.DanceOff, danceOff => danceOff.danceBattles),
    __metadata("design:type", dance_off_entity_1.DanceOff)
], DanceBattle.prototype, "partOfDanceOff", void 0);
DanceBattle = __decorate([
    typeorm_1.Entity()
], DanceBattle);
exports.DanceBattle = DanceBattle;
//# sourceMappingURL=dance-battle.entity.js.map