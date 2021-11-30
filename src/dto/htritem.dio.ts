import { IsString, IsNotEmpty, IsNumber, IsOptional } from 'class-validator';

export class HtritemDto{

    @IsNumber()
    @IsOptional()
    id: number;

    @IsString()
    @IsOptional()
    htritemDate: string;

    @IsNumber()
    @IsOptional()
    htritemCount: number;

    @IsNumber()
    @IsOptional()
    itemId: number;

}