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
exports.RobotsController = void 0;
const common_1 = require("@nestjs/common");
const robots_service_1 = require("./robots.service");
const create_robot_dto_1 = require("./create-robot.dto");
let RobotsController = class RobotsController {
    constructor(robotsService) {
        this.robotsService = robotsService;
    }
    getAllRobots() {
        return this.robotsService.findAll();
    }
    getRobotById(id) {
        return this.robotsService.findOneById(id);
    }
    createRobot(createRobotDTO) {
        return this.robotsService.create(createRobotDTO);
    }
    updateRobot(id, updateRobotDTO) {
        return this.robotsService.update(id, updateRobotDTO);
    }
    deleteRobot(id) {
        return this.robotsService.delete(id);
    }
};
__decorate([
    common_1.Get('all'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], RobotsController.prototype, "getAllRobots", null);
__decorate([
    common_1.Get(':id'),
    __param(0, common_1.Param('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], RobotsController.prototype, "getRobotById", null);
__decorate([
    common_1.Post(),
    __param(0, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_robot_dto_1.CreateRobotDto]),
    __metadata("design:returntype", Promise)
], RobotsController.prototype, "createRobot", null);
__decorate([
    common_1.Put(':id'),
    __param(0, common_1.Param('id')),
    __param(1, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, create_robot_dto_1.CreateRobotDto]),
    __metadata("design:returntype", Promise)
], RobotsController.prototype, "updateRobot", null);
__decorate([
    common_1.Delete(':id'),
    __param(0, common_1.Param('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], RobotsController.prototype, "deleteRobot", null);
RobotsController = __decorate([
    common_1.Controller('robots'),
    __metadata("design:paramtypes", [robots_service_1.RobotsService])
], RobotsController);
exports.RobotsController = RobotsController;
//# sourceMappingURL=robots.controller.js.map