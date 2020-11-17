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
exports.DanceBattlesService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const dance_battle_entity_1 = require("./dance-battle.entity");
const typeorm_2 = require("typeorm");
const robot_entity_1 = require("../robots/robot.entity");
const dance_off_entity_1 = require("../dance-offs/dance-off.entity");
let DanceBattlesService = class DanceBattlesService {
    constructor(danceBattlesRepository) {
        this.danceBattlesRepository = danceBattlesRepository;
    }
    async findAll() {
        return this.danceBattlesRepository.find({ relations: ["redRobot", "blueRobot", "partOfDanceOff"] });
    }
    async findById(id) {
        return this.danceBattlesRepository.findOne(id, { relations: ["redRobot", "blueRobot", "partOfDanceOff"] });
    }
    async create(createDanceBattleDTO) {
        const { winningTeam, winningRobot } = this.getWinner(createDanceBattleDTO.blueRobot, createDanceBattleDTO.redRobot);
        const danceBattle = new dance_battle_entity_1.DanceBattle();
        danceBattle.blueRobot = createDanceBattleDTO.blueRobot;
        danceBattle.redRobot = createDanceBattleDTO.redRobot;
        danceBattle.winningTeam = winningTeam;
        danceBattle.winningRobot = winningRobot;
        return this.danceBattlesRepository.save(danceBattle);
    }
    async delete(id) {
        return this.danceBattlesRepository.delete({ id: +id });
    }
    getWinner(blueRobot, redRobot) {
        const powerMoveWeights = {};
        Object.keys(robot_entity_1.PowerMove).forEach(powerMove => {
            powerMoveWeights[powerMove] = Math.random();
        });
        const blueDamage = blueRobot.experience * powerMoveWeights[blueRobot.powerMove];
        const redDamage = redRobot.experience * powerMoveWeights[redRobot.powerMove];
        const blueTeamWon = { winningTeam: dance_off_entity_1.Team.blue, winningRobot: blueRobot };
        const redTeamWon = { winningTeam: dance_off_entity_1.Team.red, winningRobot: redRobot };
        if (blueDamage > redDamage) {
            return blueTeamWon;
        }
        if (blueDamage < redDamage) {
            return redTeamWon;
        }
        if (blueRobot.experience > redRobot.experience) {
            return blueTeamWon;
        }
        if (blueRobot.experience < redRobot.experience) {
            return redTeamWon;
        }
        return Math.floor(Math.random() * 2) === 0 ? blueTeamWon : redTeamWon;
    }
};
DanceBattlesService = __decorate([
    common_1.Injectable(),
    __param(0, typeorm_1.InjectRepository(dance_battle_entity_1.DanceBattle)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], DanceBattlesService);
exports.DanceBattlesService = DanceBattlesService;
//# sourceMappingURL=dance-battles.service.js.map