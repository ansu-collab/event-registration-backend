import { EventsService } from './events.service';
import { CreateEventDto } from './dto/create-event.dto';
import { UpdateEventDto } from './dto/update-event.dto';
export declare class EventsController {
    private eventsService;
    constructor(eventsService: EventsService);
    findAll(villageId?: string): Promise<({
        village: {
            id: number;
            name: string;
        };
        timeSlots: {
            id: number;
            createdAt: Date;
            updatedAt: Date;
            time: string;
            eventId: number;
        }[];
        _count: {
            timeSlots: number;
        };
    } & {
        id: number;
        createdAt: Date;
        updatedAt: Date;
        name: string;
        description: string | null;
        villageId: number;
    })[]>;
    findOne(id: number): Promise<{
        village: {
            id: number;
            createdAt: Date;
            updatedAt: Date;
            name: string;
        };
        timeSlots: {
            id: number;
            createdAt: Date;
            updatedAt: Date;
            time: string;
            eventId: number;
        }[];
    } & {
        id: number;
        createdAt: Date;
        updatedAt: Date;
        name: string;
        description: string | null;
        villageId: number;
    }>;
    create(dto: CreateEventDto): Promise<{
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
    }>;
    update(id: number, dto: UpdateEventDto): Promise<{
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
    }>;
    remove(id: number): Promise<{
        id: number;
        createdAt: Date;
        updatedAt: Date;
        name: string;
        description: string | null;
        villageId: number;
    }>;
}
