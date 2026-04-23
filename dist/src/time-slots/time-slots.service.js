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
exports.TimeSlotsService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../prisma/prisma.service");
let TimeSlotsService = class TimeSlotsService {
    constructor(prisma) {
        this.prisma = prisma;
    }
    async findAll(eventId) {
        return this.prisma.timeSlot.findMany({
            where: eventId ? { eventId } : undefined,
            orderBy: { time: 'asc' },
            include: {
                event: {
                    include: { village: { select: { id: true, name: true } } },
                },
            },
        });
    }
    async findWithAvailability(eventId, date) {
        const slots = await this.prisma.timeSlot.findMany({
            where: { eventId },
            orderBy: { time: 'asc' },
            include: {
                registrations: {
                    where: { date: new Date(date) },
                    select: { id: true, groupName: true, participantCount: true },
                },
                event: {
                    include: { village: { select: { id: true, name: true } } },
                },
            },
        });
        return slots.map((slot) => ({
            ...slot,
            available: slot.registrations.length === 0,
            registration: slot.registrations[0] ?? null,
            registrations: undefined,
        }));
    }
    async findOne(id) {
        const slot = await this.prisma.timeSlot.findUnique({
            where: { id },
            include: { event: true },
        });
        if (!slot)
            throw new common_1.NotFoundException(`TimeSlot #${id} not found`);
        return slot;
    }
    async create(dto) {
        try {
            return await this.prisma.timeSlot.create({
                data: dto,
                include: { event: true },
            });
        }
        catch (e) {
            if (e.code === 'P2002')
                throw new common_1.ConflictException('Time slot already exists for this event');
            if (e.code === 'P2003')
                throw new common_1.NotFoundException(`Event #${dto.eventId} not found`);
            throw e;
        }
    }
    async update(id, dto) {
        await this.findOne(id);
        try {
            return await this.prisma.timeSlot.update({
                where: { id },
                data: dto,
                include: { event: true },
            });
        }
        catch (e) {
            if (e.code === 'P2002')
                throw new common_1.ConflictException('Time slot already exists for this event');
            throw e;
        }
    }
    async remove(id) {
        await this.findOne(id);
        return this.prisma.timeSlot.delete({ where: { id } });
    }
};
exports.TimeSlotsService = TimeSlotsService;
exports.TimeSlotsService = TimeSlotsService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], TimeSlotsService);
//# sourceMappingURL=time-slots.service.js.map