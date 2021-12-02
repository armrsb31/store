import { Body, Controller, Delete, Get, Param, Post, Put, UsePipes, ValidationPipe } from '@nestjs/common';
import { ItemDto } from 'src/dto/item.dto';
import { ItemService } from './item.service';

@Controller('item')
export class ItemController {

    constructor(
        private readonly itemService: ItemService,
    ){}

    @Get()
    async getItem(){
        return this.itemService.getItem();
    }

    @Post('single')
    @UsePipes(new ValidationPipe({ transform: true }))
    async createItem(@Body() item:ItemDto){
        return await this.itemService.createItem(item);
    }

    @Put('single')
    @UsePipes(new ValidationPipe({ transform: true }))
    async updateNameItem(@Body() item: ItemDto){
        return await this.itemService.updateName(item);
    }






    @Delete(':id')
    @UsePipes(new ValidationPipe({ transform: true }))
    async deleteItem(@Param('id') id: number){
        return await this.itemService.deleteItem(id);
    }

    @Delete('deleteAll')
    @UsePipes(new ValidationPipe({ transform: true }))
    async deleteAllItem(){
        return await this.itemService.deleteAllItem();
    }
    
}
