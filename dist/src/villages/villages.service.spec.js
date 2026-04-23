"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const testing_1 = require("@nestjs/testing");
const common_1 = require("@nestjs/common");
const villages_service_1 = require("./villages.service");
const prisma_service_1 = require("../prisma/prisma.service");
const mockPrismaService = {
    village: {
        findMany: jest.fn(),
        findUnique: jest.fn(),
        create: jest.fn(),
        update: jest.fn(),
        delete: jest.fn(),
    },
};
describe('VillagesService', () => {
    let service;
    beforeEach(async () => {
        const module = await testing_1.Test.createTestingModule({
            providers: [
                villages_service_1.VillagesService,
                { provide: prisma_service_1.PrismaService, useValue: mockPrismaService },
            ],
        }).compile();
        service = module.get(villages_service_1.VillagesService);
        jest.clearAllMocks();
    });
    describe('findAll', () => {
        it('returns all villages', async () => {
            const villages = [{ id: 1, name: 'Sunrise Village' }];
            mockPrismaService.village.findMany.mockResolvedValue(villages);
            expect(await service.findAll()).toEqual(villages);
        });
    });
    describe('findOne', () => {
        it('returns a village by id', async () => {
            const village = { id: 1, name: 'Sunrise Village', events: [] };
            mockPrismaService.village.findUnique.mockResolvedValue(village);
            expect(await service.findOne(1)).toEqual(village);
        });
        it('throws NotFoundException when village not found', async () => {
            mockPrismaService.village.findUnique.mockResolvedValue(null);
            await expect(service.findOne(999)).rejects.toThrow(common_1.NotFoundException);
        });
    });
    describe('create', () => {
        it('creates a village', async () => {
            const village = { id: 1, name: 'New Village' };
            mockPrismaService.village.create.mockResolvedValue(village);
            expect(await service.create({ name: 'New Village' })).toEqual(village);
        });
        it('throws ConflictException on duplicate name', async () => {
            mockPrismaService.village.create.mockRejectedValue({ code: 'P2002' });
            await expect(service.create({ name: 'Existing Village' })).rejects.toThrow(common_1.ConflictException);
        });
    });
    describe('update', () => {
        it('updates a village', async () => {
            const village = { id: 1, name: 'Updated Village', events: [] };
            mockPrismaService.village.findUnique.mockResolvedValue(village);
            mockPrismaService.village.update.mockResolvedValue({ ...village, name: 'Updated Village' });
            const result = await service.update(1, { name: 'Updated Village' });
            expect(result.name).toBe('Updated Village');
        });
        it('throws NotFoundException when village not found', async () => {
            mockPrismaService.village.findUnique.mockResolvedValue(null);
            await expect(service.update(999, { name: 'X' })).rejects.toThrow(common_1.NotFoundException);
        });
    });
    describe('remove', () => {
        it('deletes a village', async () => {
            const village = { id: 1, name: 'Village', events: [] };
            mockPrismaService.village.findUnique.mockResolvedValue(village);
            mockPrismaService.village.delete.mockResolvedValue(village);
            expect(await service.remove(1)).toEqual(village);
        });
    });
});
//# sourceMappingURL=villages.service.spec.js.map