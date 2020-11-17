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
exports.Robot = exports.PowerMove = void 0;
const typeorm_1 = require("typeorm");
const dance_battle_entity_1 = require("../dance-battles/dance-battle.entity");
const dance_off_entity_1 = require("../dance-offs/dance-off.entity");
var PowerMove;
(function (PowerMove) {
    PowerMove["infameMoonwalk"] = "infameMoonwalk";
    PowerMove["rebolation"] = "rebolation";
    PowerMove["theGangnamStyle"] = "theGangnamStyle";
    PowerMove["theWoah"] = "theWoah";
    PowerMove["bodyRolls"] = "bodyRolls";
    PowerMove["twoSteps"] = "twoSteps";
    PowerMove["dougieDougie"] = "dougieDougie";
    PowerMove["electricSide"] = "electricSide";
    PowerMove["theBizMarkie"] = "theBizMarkie";
    PowerMove["theBustDown"] = "theBustDown";
})(PowerMove = exports.PowerMove || (exports.PowerMove = {}));
let Robot = class Robot {
};
__decorate([
    typeorm_1.PrimaryGeneratedColumn('uuid'),
    __metadata("design:type", Number)
], Robot.prototype, "id", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], Robot.prototype, "name", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], Robot.prototype, "powerMove", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", Number)
], Robot.prototype, "experience", void 0);
__decorate([
    typeorm_1.Column({ default: false }),
    __metadata("design:type", Boolean)
], Robot.prototype, "outOfOrder", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], Robot.prototype, "avatar", void 0);
__decorate([
    typeorm_1.OneToMany(type => dance_battle_entity_1.DanceBattle, danceBattle => danceBattle.blueRobot),
    __metadata("design:type", Array)
], Robot.prototype, "danceBattlesAsBlueRobot", void 0);
__decorate([
    typeorm_1.OneToMany(type => dance_battle_entity_1.DanceBattle, danceBattle => danceBattle.redRobot),
    __metadata("design:type", Array)
], Robot.prototype, "danceBattlesAsRedRobot", void 0);
__decorate([
    typeorm_1.OneToMany(type => dance_battle_entity_1.DanceBattle, danceBattle => danceBattle.winningRobot),
    __metadata("design:type", Array)
], Robot.prototype, "danceBattlesWon", void 0);
__decorate([
    typeorm_1.ManyToMany(type => dance_off_entity_1.DanceOff, danceOff => danceOff.redTeam),
    __metadata("design:type", Array)
], Robot.prototype, "danceOffsAsRedTeam", void 0);
__decorate([
    typeorm_1.ManyToMany(type => dance_off_entity_1.DanceOff, danceOff => danceOff.blueTeam),
    __metadata("design:type", Array)
], Robot.prototype, "danceOffsAsBlueTeam", void 0);
Robot = __decorate([
    typeorm_1.Entity()
], Robot);
exports.Robot = Robot;
//# sourceMappingURL=robot.entity.js.map