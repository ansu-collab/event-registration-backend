import { PrismaService } from '../prisma/prisma.service';
import { CreateTimeSlotDto } from './dto/create-time-slot.dto';
import { UpdateTimeSlotDto } from './dto/update-time-slot.dto';
export declare class TimeSlotsService {
    private prisma;
    constructor(prisma: PrismaService);
    findAll(eventId?: number): Promise<({
        event: {
            village: {
                id: number;
                name: string;
            };
        } & {
            id: number;
            createdAt: Date;
            updatedAt: Date;
            name: string;
            description: string | null;
            villageId: number;
        };
    } & {
        id: number;
        createdAt: Date;
        updatedAt: Date;
        time: string;
        eventId: number;
    })[]>;
    findWithAvailability(eventId: number, date: string): Promise<{
        available: boolean;
        registration: {
            id: number;
            groupName: string;
            participantCount: number;
        };
        registrations: any;
        event: {
            village: {
                id: number;
                name: string;
            };
        } & {
            id: number;
            createdAt: Date;
            updatedAt: Date;
            name: string;
            description: string | null;
            villageId: number;
        };
        id: number;
        createdAt: Date;
        updatedAt: Date;
        time: string;
        eventId: number;
    }[]>;
    findOne(id: number): Promise<{
        event: {
            id: number;
            createdAt: Date;
            updatedAt: Date;
            name: string;
            description: string | null;
            villageId: number;
        };
    } & {
        id: number;
        createdAt: Date;
        updatedAt: Date;
        time: string;
        eventId: number;
    }>;
    create(dto: CreateTimeSlotDto): Promise<{
        event: {
            id: number;
            createdAt: Date;
            updatedAt: Date;
            name: string;
            description: string | null;
            villageId: number;
        };
    } & {
        id: number;
        createdAt: Date;
        updatedAt: Date;
        time: string;
        eventId: number;
    }>;
    update(id: number, dto: UpdateTimeSlotDto): Promise<{
        event: {
            id: number;
            createdAt: Date;
            updatedAt: Date;
            name: string;
            description: string | null;
            villageId: number;
        };
    } & {
        id: number;
        createdAt: Date;
        updatedAt: Date;
        time: string;
        eventId: number;
    }>;
    remove(id: number): Promise<{
        id: number;
        createdAt: Date;
        updatedAt: Date;
        time: string;
        eventId: number;
    }>;
}
