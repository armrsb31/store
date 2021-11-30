import { InjectRepository } from '@nestjs/typeorm';
import { HtritemDto } from 'src/dto/htritem.dio';
import { Repository } from 'typeorm';
import { Htritem } from './htritem.entity';


export class HtritemService {
    constructor(
        @InjectRepository(Htritem)
        private htrItemRepository: Repository<Htritem>
    ){}

    async creatHistoryItem(id: number,htrItem: HtritemDto): Promise<Htritem> {
        console.log(htrItem.htritemCount);
        console.log(htrItem.htritemDate);
        console.log(htrItem.id);
        console.log(htrItem.itemId);
        const newHtrItem = await this.htrItemRepository.create({...htrItem, item: id});
        console.log(newHtrItem);
        const a = await this.htrItemRepository.save(newHtrItem);
        console.log(a);
        return newHtrItem;
    }
}
