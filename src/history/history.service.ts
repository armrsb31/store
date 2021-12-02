import { HttpException, HttpStatus } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { HistoryDto } from 'src/dto/history.dto';
import { Item } from 'src/item/item.entity';
import { Stock } from 'src/stock/stock.entity';
import { Repository } from 'typeorm';
import { History } from './history.entity';


export class HistoryService {
    
    constructor(
        @InjectRepository(History)
        private historyRepository: Repository<History>,

        @InjectRepository(Item)
        private itemRepository: Repository<Item>,
        
        @InjectRepository(Stock)
        private stockRepository: Repository<Stock>,
    ){}

    async creatSingleItem(history: HistoryDto){
        const addItem = await this.historyRepository.create({...history, historyCount: history.historyCount, item: history.itemId, isDelete: false}).save();
        const isItem = await this.itemRepository.findOne(history.itemId);
        const isStock = await this.stockRepository.findOne(isItem.stockId);
        if(!isItem || !addItem){
            await this.historyRepository.delete(addItem.id);
            throw new HttpException('!! No Item in Stock', HttpStatus.NOT_FOUND);
        }
        await this.itemRepository.update(history.itemId,{itemCount: isItem.itemCount+history.historyCount});
        await this.stockRepository.update(isItem.stockId,{stockCount: isStock.stockCount+history.historyCount})
        return addItem;
    }







    async createMutipleItem(history: HistoryDto[]) {
        const array = [];
        for (const key in history) {
            if (Object.prototype.hasOwnProperty.call(history, key)) {
                const element = history[key];
                const {} = element;
                console.log(key);
                const isItem = await this.itemRepository.findOne(history[key].itemId);
                const isStock = await this.stockRepository.findOne(history[key].itemId);
                if(!isItem || !isStock){
                    throw new HttpException('!!No Item in Store or No Stock', HttpStatus.NOT_FOUND);
                }
                await this.historyRepository.create({...history[key], item: history[key].itemId, historyCount: history[key].historyCount}).save();
                const a = await this.itemRepository.save({...isItem, itemCount:isItem.itemCount+history[key].historyCount});
                array.push(a);
            }
        }
        return array;
    }

    async getHistoryItem() {
        return this.historyRepository.find(); 
    }
}
