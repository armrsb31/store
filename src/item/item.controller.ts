import { Body, Controller, Post } from '@nestjs/common';
import { ItemDto } from 'src/dto/item.dto';
import { ItemService } from './item.service';

@Controller('item')
export class ItemController {

    constructor(
        private readonly itemService: ItemService
    ){}

    @Post()
    async createItem(@Body() item:ItemDto){
        return await this.itemService.createItem(item);
    }
}
