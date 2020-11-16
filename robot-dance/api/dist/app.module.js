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
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const robots_module_1 = require("./robots/robots.module");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const dance_battles_module_1 = require("./dance-battles/dance-battles.module");
const dance_offs_module_1 = require("./dance-offs/dance-offs.module");
const robot_entity_1 = require("./robots/robot.entity");
const dance_battle_entity_1 = require("./dance-battles/dance-battle.entity");
const dance_off_entity_1 = require("./dance-offs/dance-off.entity");
let AppModule = class AppModule {
    constructor(connection) {
        this.connection = connection;
    }
};
AppModule = __decorate([
    common_1.Module({
        imports: [
            typeorm_1.TypeOrmModule.forRoot({
                "type": "sqlite",
                "database": "database.db",
                "logging": false,
                "synchronize": true,
                "entities": [robot_entity_1.Robot, dance_battle_entity_1.DanceBattle, dance_off_entity_1.DanceOff]
            }),
            robots_module_1.RobotsModule,
            dance_battles_module_1.DanceBattlesModule,
            dance_offs_module_1.DanceOffsModule
        ],
        controllers: [],
        providers: [],
    }),
    __metadata("design:paramtypes", [typeorm_2.Connection])
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map