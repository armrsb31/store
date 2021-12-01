import { IsString, IsNumber, IsOptional, IsInt } from 'class-validator';

export class ItemDto{

    @IsString()
    @IsOptional()
    itemName: string;

    @IsNumber()
    @IsOptional()
    id: number;

    @IsString()
    @IsOptional()
    itemDate: string;

    @IsNumber()
    @IsOptional()
    itemCount: number;

}