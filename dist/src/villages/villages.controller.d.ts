import { VillagesService } from './villages.service';
import { CreateVillageDto } from './dto/create-village.dto';
import { UpdateVillageDto } from './dto/update-village.dto';
export declare class VillagesController {
    private villagesService;
    constructor(villagesService: VillagesService);
    findAll(): Promise<({
        _count: {
            events: number;
        };
    } & {
        id: number;
        createdAt: Date;
        updatedAt: Date;
        name: string;
    })[]>;
    findOne(id: number): Promise<{
        events: ({
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
        })[];
    } & {
        id: number;
        createdAt: Date;
        updatedAt: Date;
        name: string;
    }>;
    create(dto: CreateVillageDto): Promise<{
        id: number;
        createdAt: Date;
        updatedAt: Date;
        name: string;
    }>;
    update(id: number, dto: UpdateVillageDto): Promise<{
        id: number;
        createdAt: Date;
        updatedAt: Date;
        name: string;
    }>;
    remove(id: number): Promise<{
        id: number;
        createdAt: Date;
        updatedAt: Date;
        name: string;
    }>;
}
