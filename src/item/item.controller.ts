import { Body, Controller, Delete, Param, Post, UsePipes, ValidationPipe } from '@nestjs/common';
import { ItemDto } from 'src/dto/item.dto';
import { ItemService } from './item.service';

@Controller('item')
export class ItemController {

    constructor(
        private readonly itemService: ItemService,
    ){}

    @Post()
    async createItem(@Body() item:ItemDto){
        return await this.itemService.createItem(item);
    }

    @Delete(':id')
    @UsePipes(new ValidationPipe({ transform: true }))
    async deleteItem(@Param('id') id: number){
        console.log("112");
        return await this.itemService.deleteItem(id);
    }
}
