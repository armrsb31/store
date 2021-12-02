import { Body, Controller, Get, Post, UsePipes, ValidationPipe } from '@nestjs/common';
import { HistoryDto } from 'src/dto/history.dto';
import { HistoryService } from './history.service';

@Controller('history')
export class HistoryController {

    constructor(
        private readonly historyService: HistoryService
    ){}

    @Post('single')
    @UsePipes(new ValidationPipe({ transform: true }))
    async creatSingleItem(@Body() history: HistoryDto){
        return this.historyService.creatSingleItem(history);
    }




    

    @Post('multiple')
    @UsePipes(new ValidationPipe({ transform: true }))
    async createMutipleItem(@Body() history: HistoryDto[]){
        return this.historyService.createMutipleItem(history);
    }

    @Get()
    async getItem(){
        return this.historyService.getHistoryItem();
    }
}