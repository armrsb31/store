import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { ItemDto } from 'src/dto/item.dto';
import { History } from 'src/history/history.entity';
import { Stock } from 'src/stock/stock.entity';
import { getConnection, Repository } from 'typeorm';
import { Item } from './item.entity';

@Injectable()
export class ItemService {
    
    constructor(
        @InjectRepository(Item)
        private itemRepository: Repository<Item>,

        @InjectRepository(History)
        private historyRepository: Repository<History>,

        @InjectRepository(Stock)
        private stockRepository: Repository<Stock>
    ){}

    async getItem() {
        return this.itemRepository.find();
    }

    async createItem(item: ItemDto) {
        const addItem = await this.itemRepository.create({...item, itemCount: 0, stock: item.stockId}).save();
        const isStock = await this.stockRepository.findOne(item.stockId);
        if(!isStock || !addItem){
            await this.itemRepository.delete(addItem.id);
            throw new HttpException('!! No Item or No Stock',HttpStatus.NOT_FOUND);
        }
        return addItem;
    }

    async updateName(item: ItemDto) {
        const isUpdate = await getConnection()
            .createQueryBuilder()
            .update(Item)
            .set({itemName: item.itemName})
            .where(`id = ${item.id} and stockId = ${item.stockId}`)
            .execute();
        
        const isItem = await this.itemRepository.findOne(item.id);
        if(!isItem || isUpdate.affected == 0){
            throw new HttpException('!! No Item in Stock', HttpStatus.NOT_FOUND);
        }
        return isItem;
    }




    

    async searchItem(itemID: number, stockID: number, history: History){
        const isItem = await this.itemRepository.findOne(itemID);
        const isStock = await this.stockRepository.findOne(stockID);
        if(!isItem || !isStock){
            await this.historyRepository.delete(history.id);
            throw new HttpException('!! No Item or No Stock',HttpStatus.NOT_FOUND);
        } else if(isItem.itemCount+history.historyCount < 0 || history.historyCount === 0 || isStock.stockCount+history.historyCount < 0 ){
            await this.historyRepository.delete(history.id);
            throw new HttpException('!! Count Over',HttpStatus.NOT_FOUND);
        }
        await this.stockRepository.update(stockID, { stockCount: isStock.stockCount + history.historyCount});
        await this.itemRepository.update(itemID, { itemCount: isItem.itemCount + history.historyCount});
    }

    // async deleteItem(id: number) {
    //     await this.htrItemRepository.delete({item: id});
    //     return await this.itemRepository.delete({id: id});
    // }

    async deleteItem(id: number) {
        await getConnection()
            .createQueryBuilder()
            .delete()
            .from(History)
            .where('itemId = :id', {id: id})
            .execute();

            return await this.itemRepository.delete({id: id});
    }

    async deleteAllItem() {
        await this.historyRepository.query("delete from htritem");
        return await this.itemRepository.query("delete from item");
    }

}