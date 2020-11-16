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
exports.DanceOffsService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const dance_off_entity_1 = require("./dance-off.entity");
const typeorm_2 = require("typeorm");
const robots_service_1 = require("../robots/robots.service");
const dance_battles_service_1 = require("../dance-battles/dance-battles.service");
const create_dance_battle_dto_1 = require("../dance-battles/create-dance-battle.dto");
let DanceOffsService = class DanceOffsService {
    constructor(danceOffRepository, robotsService, danceBattleService) {
        this.danceOffRepository = danceOffRepository;
        this.robotsService = robotsService;
        this.danceBattleService = danceBattleService;
    }
    async createDanceOffWithoutTeams() {
        const allRobots = await this.robotsService.findAll();
        const createDanceOffDto = await this.createRandomDanceOffDTO(allRobots);
        const danceOff = await this.generateDanceOff(createDanceOffDto);
        return this.danceOffRepository.save(danceOff);
    }
    async createDanceOffWithTeams(createDanceOffDto) {
        const danceOff = await this.generateDanceOff(createDanceOffDto);
        return this.danceOffRepository.save(danceOff);
    }
    async generateDanceOff(createDanceOffDto) {
        const { danceBattleResults, winningTeam } = await this.runBattles(createDanceOffDto);
        const danceOff = new dance_off_entity_1.DanceOff();
        danceOff.blueTeam = createDanceOffDto.blueTeam;
        danceOff.redTeam = createDanceOffDto.redTeam;
        danceOff.danceBattles = danceBattleResults;
        danceOff.winningTeam = winningTeam;
        return danceOff;
    }
    createRandomDanceOffDTO(allRobots) {
        const generatedBlueTeam = this.generateTeam(allRobots);
        const generatedRedTeam = this.generateTeam(generatedBlueTeam.remainingRobots);
        return { redTeam: generatedRedTeam.newTeam, blueTeam: generatedBlueTeam.newTeam };
    }
    generateTeam(allRobots) {
        let remainingRobots = allRobots;
        const newTeam = [];
        while (newTeam.length < 5) {
            const index = Math.floor(Math.random() * remainingRobots.length);
            const randomSelectedRobot = remainingRobots[index];
            newTeam.push(randomSelectedRobot);
            remainingRobots = remainingRobots.filter(robot => robot.id !== randomSelectedRobot.id);
        }
        return { newTeam: newTeam, remainingRobots: remainingRobots };
    }
    async runBattles(createDanceOffDto) {
        const { redTeam, blueTeam } = createDanceOffDto;
        const danceBattlesResults = [];
        for (let i = 0; i < redTeam.length; i++) {
            const createDanceBattleDto = new create_dance_battle_dto_1.CreateDanceBattleDto();
            createDanceBattleDto.redRobot = redTeam[i];
            createDanceBattleDto.blueRobot = blueTeam[i];
            const danceBattleResult = await this.danceBattleService.create(createDanceBattleDto);
            danceBattlesResults.push(danceBattleResult);
        }
        let blueTeamVictories = 0;
        let redTeamVictories = 0;
        danceBattlesResults.forEach(danceBattle => {
            danceBattle.winningTeam === dance_off_entity_1.Team.blue ? blueTeamVictories++ : redTeamVictories++;
        });
        let winningTeam = undefined;
        if (blueTeamVictories !== redTeamVictories) {
            winningTeam = blueTeamVictories >= redTeamVictories ? dance_off_entity_1.Team.blue : dance_off_entity_1.Team.red;
        }
        else {
            winningTeam = Math.floor(Math.random() * 2) === 0 ? dance_off_entity_1.Team.blue : dance_off_entity_1.Team.red;
        }
        return {
            danceBattleResults: danceBattlesResults,
            winningTeam: winningTeam
        };
    }
};
DanceOffsService = __decorate([
    common_1.Injectable(),
    __param(0, typeorm_1.InjectRepository(dance_off_entity_1.DanceOff)),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        robots_service_1.RobotsService,
        dance_battles_service_1.DanceBattlesService])
], DanceOffsService);
exports.DanceOffsService = DanceOffsService;
//# sourceMappingURL=dance-offs.service.js.map