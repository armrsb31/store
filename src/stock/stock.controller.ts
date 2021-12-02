import { Body, Controller, Get, Post, Put, UsePipes, ValidationPipe } from '@nestjs/common';
import { StockDto } from 'src/dto/stock.dto';
import { StockService } from './stock.service';

@Controller('stock')
export class StockController {

    constructor(
        private readonly stockService: StockService
    ){}

    @Get()
    async getStock(){
        return this.stockService.getStock();
    }
    
    @Post('single')
    @UsePipes(new ValidationPipe({transform: true}))
    async createStock(@Body() stock: StockDto){
        return this.stockService.createStock(stock);
    }

    @Put('single')
    @UsePipes(new ValidationPipe({transform: true}))
    async updateNameStock(@Body() stock: StockDto){
        return this.stockService.updateNameStock(stock);
    }
}