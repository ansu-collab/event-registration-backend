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
exports.VillagesController = void 0;
const common_1 = require("@nestjs/common");
const villages_service_1 = require("./villages.service");
const create_village_dto_1 = require("./dto/create-village.dto");
const update_village_dto_1 = require("./dto/update-village.dto");
const public_decorator_1 = require("../auth/decorators/public.decorator");
let VillagesController = class VillagesController {
    constructor(villagesService) {
        this.villagesService = villagesService;
    }
    findAll() {
        return this.villagesService.findAll();
    }
    findOne(id) {
        return this.villagesService.findOne(id);
    }
    create(dto) {
        return this.villagesService.create(dto);
    }
    update(id, dto) {
        return this.villagesService.update(id, dto);
    }
    remove(id) {
        return this.villagesService.remove(id);
    }
};
exports.VillagesController = VillagesController;
__decorate([
    (0, public_decorator_1.Public)(),
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], VillagesController.prototype, "findAll", null);
__decorate([
    (0, public_decorator_1.Public)(),
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], VillagesController.prototype, "findOne", null);
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_village_dto_1.CreateVillageDto]),
    __metadata("design:returntype", void 0)
], VillagesController.prototype, "create", null);
__decorate([
    (0, common_1.Put)(':id'),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, update_village_dto_1.UpdateVillageDto]),
    __metadata("design:returntype", void 0)
], VillagesController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], VillagesController.prototype, "remove", null);
exports.VillagesController = VillagesController = __decorate([
    (0, common_1.Controller)('villages'),
    __metadata("design:paramtypes", [villages_service_1.VillagesService])
], VillagesController);
//# sourceMappingURL=villages.controller.js.map