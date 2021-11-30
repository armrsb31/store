import { Body, Controller, Param, Post } from '@nestjs/common';
import { HtritemDto } from 'src/dto/htritem.dio';
import { Htritem } from './htritem.entity';
import { HtritemService } from './htritem.service';

@Controller('htritem')
export class HtritemController {

    constructor(
        private readonly htritemService: HtritemService
    ){}

    @Post(':id')
    async creatHistoryItem(@Param('id') id: number, @Body() htrItem: HtritemDto): Promise<Htritem>{
        htrItem.itemId = id;
        return this.htritemService.creatHistoryItem(id,htrItem);

    }
}
