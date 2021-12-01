import { number } from '@hapi/joi';
import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { reduce } from 'rxjs';
import { HtritemDto } from 'src/dto/htritem.dio';
import { ItemDto } from 'src/dto/item.dto';
import { Htritem } from 'src/htritem/htritem.entity';
import { Repository } from 'typeorm';
import { Item } from './item.entity';

@Injectable()
export class ItemService {
    constructor(
        @InjectRepository(Item)
        private itemRepository: Repository<Item>,

        @InjectRepository(Htritem)
        private htrItemRepository: Repository<Htritem>
    ){}

    async createItem(item: ItemDto) {
        item.itemCount = 0;
        const newItem = await this.itemRepository.create(item);
        await this.itemRepository.save(newItem);
        return newItem;
      }

    async searchItem(id: number, count: number, htr: Htritem){
        const isItem = await this.itemRepository.findOne(id);
        console.log(count);
        if(!isItem){
            throw new HttpException('!!No Item',HttpStatus.NOT_FOUND);
        }else {

        }
        const a = await this.htrItemRepository.save(htr);
        a.htrItemCount = a.htrItemCount+6;
        // else if(isItem.itemCount+count.htrItemCount < 0){
        //     throw new HttpException('!!No Create',HttpStatus.NOT_FOUND);
        // }
        console.log(a.htrItemCount);
        console.log(isItem.itemCount+6);
        console.log(count+6);
        return isItem;
    }
}
