import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
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

    async searchItem(id: number, htrItem: Htritem){
        const isItem = await this.itemRepository.findOne(id);
        if(!isItem){
            await this.htrItemRepository.delete(htrItem.id);
            throw new HttpException('!!No Item',HttpStatus.NOT_FOUND);
        } else if(isItem.itemCount+htrItem.htrItemCount < 0 || htrItem.htrItemCount === 0){
            await this.htrItemRepository.delete(htrItem.id);
            throw new HttpException('!!No Create',HttpStatus.NOT_FOUND);
        }
        await this.itemRepository.save({...isItem, itemCount:isItem.itemCount+htrItem.htrItemCount});
    }

    async deleteItem(id: number) {
        await this.htrItemRepository.delete({item: id});
        return await this.itemRepository.delete({id: id});
    }
}