import { Response } from 'express';
import { RegistrationsService } from './registrations.service';
import { CreateRegistrationDto } from './dto/create-registration.dto';
export declare class RegistrationsController {
    private registrationsService;
    constructor(registrationsService: RegistrationsService);
    findAll(date?: string, villageId?: string): Promise<({
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
    exportCsv(date?: string, villageId?: string, res?: Response): Promise<void>;
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
}
