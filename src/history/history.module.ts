import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Item } from 'src/item/item.entity';
import { ItemService } from 'src/item/item.service';
import { Stock } from 'src/stock/stock.entity';
import { HistoryController } from './history.controller';
import { History } from './history.entity';
import { HistoryService } from './history.service';

@Module({
  imports: [
    TypeOrmModule.forFeature([Item]),
    TypeOrmModule.forFeature([History]),
    TypeOrmModule.forFeature([Stock]),
  ],
  controllers: [HistoryController],
  providers: [HistoryService, ItemService]
})
export class HistoryModule {}
