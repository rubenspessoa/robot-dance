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
exports.DanceOff = exports.Team = void 0;
const typeorm_1 = require("typeorm");
const robot_entity_1 = require("../robots/robot.entity");
const dance_battle_entity_1 = require("../dance-battles/dance-battle.entity");
var Team;
(function (Team) {
    Team["red"] = "red";
    Team["blue"] = "blue";
})(Team = exports.Team || (exports.Team = {}));
let DanceOff = class DanceOff {
};
__decorate([
    typeorm_1.PrimaryGeneratedColumn(),
    __metadata("design:type", Number)
], DanceOff.prototype, "id", void 0);
__decorate([
    typeorm_1.ManyToMany(type => robot_entity_1.Robot, robot => robot.danceOffsAsRedTeam),
    typeorm_1.JoinTable(),
    __metadata("design:type", Array)
], DanceOff.prototype, "redTeam", void 0);
__decorate([
    typeorm_1.ManyToMany(type => robot_entity_1.Robot, robot => robot.danceOffsAsBlueTeam),
    typeorm_1.JoinTable(),
    __metadata("design:type", Array)
], DanceOff.prototype, "blueTeam", void 0);
__decorate([
    typeorm_1.OneToMany(type => dance_battle_entity_1.DanceBattle, danceBattle => danceBattle.partOfDanceOff),
    __metadata("design:type", Array)
], DanceOff.prototype, "danceBattles", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], DanceOff.prototype, "winningTeam", void 0);
DanceOff = __decorate([
    typeorm_1.Entity()
], DanceOff);
exports.DanceOff = DanceOff;
//# sourceMappingURL=dance-off.entity.js.map