import { IsNotEmpty, IsNumber, IsOptional, IsString } from "class-validator";

export class StockDto {

    @IsNumber()
    @IsOptional()
    id: number;

    @IsString()
    @IsNotEmpty()
    stockName: string;

    @IsNumber()
    @IsOptional()
    stockCount: number;

    @IsString()
    @IsOptional()
    stockDate: string;
}