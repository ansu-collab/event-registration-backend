import { IsString, IsInt, IsOptional, MinLength, MaxLength, Min, Max } from 'class-validator';

export class CreateEventDto {
  @IsString()
  @MinLength(2)
  @MaxLength(200)
  name: string;

  @IsOptional()
  @IsString()
  @MaxLength(500)
  description?: string;

  @IsOptional()
  @IsString()
  @MaxLength(200)
  location?: string;

  @IsOptional()
  @IsInt()
  @Min(1)
  @Max(14)
  day?: number;

  @IsInt()
  @Min(1)
  villageId: number;
}
