import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { ItemDto } from 'src/dto/item.dto';
import { Repository } from 'typeorm';
import { Item } from './item.entity';

@Injectable()
export class ItemService {
    constructor(
        @InjectRepository(Item)
        private itemRepository: Repository<Item>
    ){}

    async createItem(item: ItemDto) {
        item.itemCount = 0;
        const newItem = await this.itemRepository.create(item);
        await this.itemRepository.save(newItem);
        return newItem;
      }
}
