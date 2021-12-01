import { IsString, IsNotEmpty, IsNumber, IsOptional, IsInt } from 'class-validator';

export class HtritemDto{

    @IsNumber()
    @IsOptional()
    id: number;

    @IsString()
    @IsOptional()
    htritemDate: string;

    @IsInt()
    @IsNumber()
    @IsOptional()
    htritemCount: number;

    @IsNumber()
    @IsOptional()
    itemId: number;

}