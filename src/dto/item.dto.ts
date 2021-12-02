import { IsNumber, IsOptional, IsString } from "class-validator";

export class ItemDto{

    @IsString()
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
    
    @IsNumber()
    stockId: number;

}