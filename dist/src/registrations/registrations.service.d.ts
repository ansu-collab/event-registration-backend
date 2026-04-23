import { PrismaService } from '../prisma/prisma.service';
import { CreateRegistrationDto } from './dto/create-registration.dto';
export declare class RegistrationsService {
    private prisma;
    constructor(prisma: PrismaService);
    findAll(filters?: {
        date?: string;
        villageId?: number;
    }): Promise<({
        timeSlot: {
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
        };
    } & {
        id: number;
        createdAt: Date;
        updatedAt: Date;
        groupName: string;
        participantCount: number;
        date: Date;
        timeSlotId: number;
    })[]>;
    findOne(id: number): Promise<{
        timeSlot: {
            event: {
                village: {
                    id: number;
                    createdAt: Date;
                    updatedAt: Date;
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
        };
    } & {
        id: number;
        createdAt: Date;
        updatedAt: Date;
        groupName: string;
        participantCount: number;
        date: Date;
        timeSlotId: number;
    }>;
    create(dto: CreateRegistrationDto): Promise<{
        timeSlot: {
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
        };
    } & {
        id: number;
        createdAt: Date;
        updatedAt: Date;
        groupName: string;
        participantCount: number;
        date: Date;
        timeSlotId: number;
    }>;
    remove(id: number): Promise<{
        id: number;
        createdAt: Date;
        updatedAt: Date;
        groupName: string;
        participantCount: number;
        date: Date;
        timeSlotId: number;
    }>;
    exportCsv(filters?: {
        date?: string;
        villageId?: number;
    }): Promise<string>;
    getCalendar(date: string): Promise<{
        slotId: number;
        time: string;
        event: string;
        village: string;
        villageId: number;
        eventId: number;
        available: boolean;
        registration: {
            timeSlot: {
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
            };
        } & {
            id: number;
            createdAt: Date;
            updatedAt: Date;
            groupName: string;
            participantCount: number;
            date: Date;
            timeSlotId: number;
        };
    }[]>;
}
