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
exports.EventsService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../prisma/prisma.service");
let EventsService = class EventsService {
    constructor(prisma) {
        this.prisma = prisma;
    }
    async findAll(villageId) {
        return this.prisma.event.findMany({
            where: villageId ? { villageId } : undefined,
            orderBy: { name: 'asc' },
            include: {
                village: { select: { id: true, name: true } },
                timeSlots: { orderBy: { time: 'asc' } },
                _count: { select: { timeSlots: true } },
            },
        });
    }
    async findOne(id) {
        const event = await this.prisma.event.findUnique({
            where: { id },
            include: {
                village: true,
                timeSlots: { orderBy: { time: 'asc' } },
            },
        });
        if (!event)
            throw new common_1.NotFoundException(`Event #${id} not found`);
        return event;
    }
    async create(dto) {
        try {
            return await this.prisma.event.create({
                data: dto,
                include: { village: { select: { id: true, name: true } } },
            });
        }
        catch (e) {
            if (e.code === 'P2002')
                throw new common_1.ConflictException('Event name already exists in this village');
            if (e.code === 'P2003')
                throw new common_1.NotFoundException(`Village #${dto.villageId} not found`);
            throw e;
        }
    }
    async update(id, dto) {
        await this.findOne(id);
        try {
            return await this.prisma.event.update({
                where: { id },
                data: dto,
                include: { village: { select: { id: true, name: true } } },
            });
        }
        catch (e) {
            if (e.code === 'P2002')
                throw new common_1.ConflictException('Event name already exists in this village');
            throw e;
        }
    }
    async remove(id) {
        await this.findOne(id);
        return this.prisma.event.delete({ where: { id } });
    }
};
exports.EventsService = EventsService;
exports.EventsService = EventsService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], EventsService);
//# sourceMappingURL=events.service.js.map