import { InjectRepository } from '@nestjs/typeorm';
import { HtritemDto } from 'src/dto/htritem.dio';
import { ItemService } from 'src/item/item.service';
import { Repository } from 'typeorm';
import { Htritem } from './htritem.entity';


export class HtritemService {
    constructor(
        @InjectRepository(Htritem)
        private htrItemRepository: Repository<Htritem>,
        private readonly itemService: ItemService
    ){}

    async creatHistoryItem(id: number,htrItem: HtritemDto): Promise<Htritem> {
        const newHtrItem = await this.htrItemRepository.create({...htrItem, item: id});
        const b = await this.itemService.searchItem(id, newHtrItem.htrItemCount, newHtrItem);
        
        return ;
    }
}
