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
exports.TimeSlotsController = void 0;
const common_1 = require("@nestjs/common");
const time_slots_service_1 = require("./time-slots.service");
const create_time_slot_dto_1 = require("./dto/create-time-slot.dto");
const update_time_slot_dto_1 = require("./dto/update-time-slot.dto");
const public_decorator_1 = require("../auth/decorators/public.decorator");
let TimeSlotsController = class TimeSlotsController {
    constructor(timeSlotsService) {
        this.timeSlotsService = timeSlotsService;
    }
    findAll(eventId, date) {
        if (eventId && date) {
            if (!/^\d{4}-\d{2}-\d{2}$/.test(date)) {
                throw new common_1.BadRequestException('date must be in YYYY-MM-DD format');
            }
            return this.timeSlotsService.findWithAvailability(parseInt(eventId), date);
        }
        return this.timeSlotsService.findAll(eventId ? parseInt(eventId) : undefined);
    }
    findOne(id) {
        return this.timeSlotsService.findOne(id);
    }
    create(dto) {
        return this.timeSlotsService.create(dto);
    }
    update(id, dto) {
        return this.timeSlotsService.update(id, dto);
    }
    remove(id) {
        return this.timeSlotsService.remove(id);
    }
};
exports.TimeSlotsController = TimeSlotsController;
__decorate([
    (0, public_decorator_1.Public)(),
    (0, common_1.Get)(),
    __param(0, (0, common_1.Query)('eventId')),
    __param(1, (0, common_1.Query)('date')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String]),
    __metadata("design:returntype", void 0)
], TimeSlotsController.prototype, "findAll", null);
__decorate([
    (0, public_decorator_1.Public)(),
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], TimeSlotsController.prototype, "findOne", null);
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_time_slot_dto_1.CreateTimeSlotDto]),
    __metadata("design:returntype", void 0)
], TimeSlotsController.prototype, "create", null);
__decorate([
    (0, common_1.Put)(':id'),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, update_time_slot_dto_1.UpdateTimeSlotDto]),
    __metadata("design:returntype", void 0)
], TimeSlotsController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], TimeSlotsController.prototype, "remove", null);
exports.TimeSlotsController = TimeSlotsController = __decorate([
    (0, common_1.Controller)('time-slots'),
    __metadata("design:paramtypes", [time_slots_service_1.TimeSlotsService])
], TimeSlotsController);
//# sourceMappingURL=time-slots.controller.js.map