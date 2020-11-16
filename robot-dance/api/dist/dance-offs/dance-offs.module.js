"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DanceOffsModule = void 0;
const common_1 = require("@nestjs/common");
const dance_offs_controller_1 = require("./dance-offs.controller");
const dance_offs_service_1 = require("./dance-offs.service");
const typeorm_1 = require("@nestjs/typeorm");
const dance_off_entity_1 = require("./dance-off.entity");
const robots_module_1 = require("../robots/robots.module");
const dance_battles_module_1 = require("../dance-battles/dance-battles.module");
let DanceOffsModule = class DanceOffsModule {
};
DanceOffsModule = __decorate([
    common_1.Module({
        imports: [
            typeorm_1.TypeOrmModule.forFeature([dance_off_entity_1.DanceOff]),
            robots_module_1.RobotsModule,
            dance_battles_module_1.DanceBattlesModule
        ],
        controllers: [dance_offs_controller_1.DanceOffsController],
        providers: [dance_offs_service_1.DanceOffsService]
    })
], DanceOffsModule);
exports.DanceOffsModule = DanceOffsModule;
//# sourceMappingURL=dance-offs.module.js.map