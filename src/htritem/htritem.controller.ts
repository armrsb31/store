import { Body, Controller, Param, Post, UsePipes, ValidationPipe } from '@nestjs/common';
import { HtritemDto } from 'src/dto/htritem.dto';
import { Htritem } from './htritem.entity';
import { HtritemService } from './htritem.service';

@Controller('htritem')
export class HtritemController {

    constructor(
        private readonly htritemService: HtritemService
    ){}

    @Post(':id')
    @UsePipes(new ValidationPipe({ transform: true }))
    async creatHistoryItem(@Param('id') id: number, @Body() htrItem: HtritemDto): Promise<Htritem>{
        return this.htritemService.creatHistoryItem(id,htrItem);

    }
}
