import { TimeSlotsService } from './time-slots.service';
import { CreateTimeSlotDto } from './dto/create-time-slot.dto';
import { UpdateTimeSlotDto } from './dto/update-time-slot.dto';
export declare class TimeSlotsController {
    private timeSlotsService;
    constructor(timeSlotsService: TimeSlotsService);
    findAll(eventId?: string, date?: string): Promise<({
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
