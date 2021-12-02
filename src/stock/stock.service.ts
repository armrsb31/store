import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { StockDto } from 'src/dto/stock.dto';
import { Repository } from 'typeorm';
import { Stock } from './stock.entity';

@Injectable()
export class StockService {
    
    constructor(
        @InjectRepository(Stock)
        private stockRepository: Repository<Stock>
    ){}

    async createStock(stock: StockDto) {
        return await this.stockRepository.create({...stock, stockCount: 0}).save();
    }

    async getStock() {
        return await this.stockRepository.find();
    }

    async updateNameStock(stock: StockDto) {
        await this.stockRepository.update(stock.id,stock);
        const isStock = await this.stockRepository.findOne(stock.id);
        if(!isStock){
            throw new HttpException('!!No Stock', HttpStatus.NOT_FOUND);
        }
        return isStock;
    }
    
}
