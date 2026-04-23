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
exports.RegistrationsController = void 0;
const common_1 = require("@nestjs/common");
const registrations_service_1 = require("./registrations.service");
const create_registration_dto_1 = require("./dto/create-registration.dto");
const public_decorator_1 = require("../auth/decorators/public.decorator");
let RegistrationsController = class RegistrationsController {
    constructor(registrationsService) {
        this.registrationsService = registrationsService;
    }
    findAll(date, villageId) {
        return this.registrationsService.findAll({
            date,
            villageId: villageId ? parseInt(villageId) : undefined,
        });
    }
    async exportCsv(date, villageId, res) {
        const csv = await this.registrationsService.exportCsv({
            date,
            villageId: villageId ? parseInt(villageId) : undefined,
        });
        const filename = `registrations-${date ?? 'all'}.csv`;
        res.setHeader('Content-Type', 'text/csv');
        res.setHeader('Content-Disposition', `attachment; filename="${filename}"`);
        res.send(csv);
    }
    getCalendar(date) {
        if (!date || !/^\d{4}-\d{2}-\d{2}$/.test(date)) {
            throw new common_1.BadRequestException('date query param required in YYYY-MM-DD format');
        }
        return this.registrationsService.getCalendar(date);
    }
    findOne(id) {
        return this.registrationsService.findOne(id);
    }
    create(dto) {
        return this.registrationsService.create(dto);
    }
    remove(id) {
        return this.registrationsService.remove(id);
    }
};
exports.RegistrationsController = RegistrationsController;
__decorate([
    (0, common_1.Get)(),
    __param(0, (0, common_1.Query)('date')),
    __param(1, (0, common_1.Query)('villageId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String]),
    __metadata("design:returntype", void 0)
], RegistrationsController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)('export/csv'),
    __param(0, (0, common_1.Query)('date')),
    __param(1, (0, common_1.Query)('villageId')),
    __param(2, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String, Object]),
    __metadata("design:returntype", Promise)
], RegistrationsController.prototype, "exportCsv", null);
__decorate([
    (0, common_1.Get)('calendar'),
    __param(0, (0, common_1.Query)('date')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], RegistrationsController.prototype, "getCalendar", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], RegistrationsController.prototype, "findOne", null);
__decorate([
    (0, public_decorator_1.Public)(),
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_registration_dto_1.CreateRegistrationDto]),
    __metadata("design:returntype", void 0)
], RegistrationsController.prototype, "create", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], RegistrationsController.prototype, "remove", null);
exports.RegistrationsController = RegistrationsController = __decorate([
    (0, common_1.Controller)('registrations'),
    __metadata("design:paramtypes", [registrations_service_1.RegistrationsService])
], RegistrationsController);
//# sourceMappingURL=registrations.controller.js.map