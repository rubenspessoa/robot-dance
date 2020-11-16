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
exports.DanceOffsController = void 0;
const common_1 = require("@nestjs/common");
const dance_offs_service_1 = require("./dance-offs.service");
const create_dance_off_dto_1 = require("./create-dance-off.dto");
let DanceOffsController = class DanceOffsController {
    constructor(danceOffsService) {
        this.danceOffsService = danceOffsService;
    }
    findAll() {
        return this.danceOffsService.findAll();
    }
    findById(id) {
        return this.danceOffsService.findOneById(id);
    }
    createDanceOffWithoutTeams() {
        return this.danceOffsService.createDanceOffWithoutTeams();
    }
    createDanceOffWithTeams(createDanceOffDTO) {
        return this.danceOffsService.createDanceOffWithTeams(createDanceOffDTO);
    }
};
__decorate([
    common_1.Get('all'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], DanceOffsController.prototype, "findAll", null);
__decorate([
    common_1.Get(':id'),
    __param(0, common_1.Param('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], DanceOffsController.prototype, "findById", null);
__decorate([
    common_1.Post(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], DanceOffsController.prototype, "createDanceOffWithoutTeams", null);
__decorate([
    common_1.Post('with-teams'),
    __param(0, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_dance_off_dto_1.CreateDanceOffDto]),
    __metadata("design:returntype", Promise)
], DanceOffsController.prototype, "createDanceOffWithTeams", null);
DanceOffsController = __decorate([
    common_1.Controller('dance-offs'),
    __metadata("design:paramtypes", [dance_offs_service_1.DanceOffsService])
], DanceOffsController);
exports.DanceOffsController = DanceOffsController;
//# sourceMappingURL=dance-offs.controller.js.map