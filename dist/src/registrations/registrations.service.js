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
exports.RegistrationsService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../prisma/prisma.service");
let RegistrationsService = class RegistrationsService {
    constructor(prisma) {
        this.prisma = prisma;
    }
    async findAll(filters) {
        const where = {};
        if (filters?.date) {
            where.date = new Date(filters.date);
        }
        if (filters?.villageId) {
            where.timeSlot = { event: { villageId: filters.villageId } };
        }
        return this.prisma.registration.findMany({
            where,
            orderBy: [{ date: 'asc' }, { createdAt: 'asc' }],
            include: {
                timeSlot: {
                    include: {
                        event: {
                            include: { village: { select: { id: true, name: true } } },
                        },
                    },
                },
            },
        });
    }
    async findOne(id) {
        const reg = await this.prisma.registration.findUnique({
            where: { id },
            include: {
                timeSlot: {
                    include: {
                        event: {
                            include: { village: true },
                        },
                    },
                },
            },
        });
        if (!reg)
            throw new common_1.NotFoundException(`Registration #${id} not found`);
        return reg;
    }
    async create(dto) {
        const date = new Date(dto.date);
        const timeSlot = await this.prisma.timeSlot.findUnique({
            where: { id: dto.timeSlotId },
            include: { event: true },
        });
        if (!timeSlot)
            throw new common_1.NotFoundException(`TimeSlot #${dto.timeSlotId} not found`);
        return this.prisma.$transaction(async (tx) => {
            const groupDayCount = await tx.registration.count({
                where: {
                    groupName: dto.groupName,
                    date,
                },
            });
            if (groupDayCount >= 2) {
                throw new common_1.BadRequestException('This group has already registered for 2 events on this day (maximum reached)');
            }
            try {
                return await tx.registration.create({
                    data: {
                        groupName: dto.groupName,
                        participantCount: dto.participantCount,
                        date,
                        timeSlotId: dto.timeSlotId,
                    },
                    include: {
                        timeSlot: {
                            include: {
                                event: {
                                    include: { village: { select: { id: true, name: true } } },
                                },
                            },
                        },
                    },
                });
            }
            catch (e) {
                if (e.code === 'P2002') {
                    throw new common_1.ConflictException('Slot already taken — another group has just registered for this time slot');
                }
                throw e;
            }
        });
    }
    async remove(id) {
        await this.findOne(id);
        return this.prisma.registration.delete({ where: { id } });
    }
    async exportCsv(filters) {
        const registrations = await this.findAll(filters);
        const headers = [
            'ID',
            'Group Name',
            'Participants',
            'Date',
            'Time',
            'Event',
            'Village',
            'Registered At',
        ];
        const rows = registrations.map((r) => [
            r.id,
            `"${r.groupName.replace(/"/g, '""')}"`,
            r.participantCount,
            r.date.toISOString().split('T')[0],
            r.timeSlot.time,
            `"${r.timeSlot.event.name.replace(/"/g, '""')}"`,
            `"${r.timeSlot.event.village.name.replace(/"/g, '""')}"`,
            r.createdAt.toISOString(),
        ]);
        return [headers.join(','), ...rows.map((r) => r.join(','))].join('\n');
    }
    async getCalendar(date) {
        const targetDate = new Date(date);
        const registrations = await this.prisma.registration.findMany({
            where: { date: targetDate },
            include: {
                timeSlot: {
                    include: {
                        event: {
                            include: { village: { select: { id: true, name: true } } },
                        },
                    },
                },
            },
        });
        const allSlots = await this.prisma.timeSlot.findMany({
            include: {
                event: {
                    include: { village: { select: { id: true, name: true } } },
                },
            },
        });
        const registrationMap = new Map(registrations.map((r) => [r.timeSlotId, r]));
        return allSlots.map((slot) => ({
            slotId: slot.id,
            time: slot.time,
            event: slot.event.name,
            village: slot.event.village.name,
            villageId: slot.event.villageId,
            eventId: slot.eventId,
            available: !registrationMap.has(slot.id),
            registration: registrationMap.get(slot.id) ?? null,
        }));
    }
};
exports.RegistrationsService = RegistrationsService;
exports.RegistrationsService = RegistrationsService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], RegistrationsService);
//# sourceMappingURL=registrations.service.js.map