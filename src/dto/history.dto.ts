import { IsBoolean, IsNumber, IsOptional, IsString } from "class-validator";

export class HistoryDto{

    @IsNumber()
    @IsOptional()
    id: number;
    
    @IsString()
    @IsOptional()
    historyDate: string;
    
    @IsNumber()
    historyCount: number;
    
    @IsNumber()
    itemId: number;

    @IsBoolean()
    @IsOptional()
    isDelete: boolean;
}