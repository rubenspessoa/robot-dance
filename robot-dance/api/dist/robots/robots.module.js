"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.RobotsModule = void 0;
const common_1 = require("@nestjs/common");
const robots_controller_1 = require("./robots.controller");
const robots_service_1 = require("./robots.service");
const typeorm_1 = require("@nestjs/typeorm");
const robot_entity_1 = require("./robot.entity");
const nestjs_command_1 = require("nestjs-command");
const robot_seed_1 = require("./robot.seed");
let RobotsModule = class RobotsModule {
};
RobotsModule = __decorate([
    common_1.Module({
        imports: [
            typeorm_1.TypeOrmModule.forFeature([robot_entity_1.Robot]),
            nestjs_command_1.CommandModule
        ],
        controllers: [robots_controller_1.RobotsController],
        providers: [robots_service_1.RobotsService, robot_seed_1.RobotSeed],
        exports: [robot_seed_1.RobotSeed, robots_service_1.RobotsService]
    })
], RobotsModule);
exports.RobotsModule = RobotsModule;
//# sourceMappingURL=robots.module.js.map