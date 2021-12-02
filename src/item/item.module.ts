import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { History } from 'src/history/history.entity';
import { Stock } from 'src/stock/stock.entity';
import { ItemController } from './item.controller';
import { Item } from './item.entity';
import { ItemService } from './item.service';

@Module({
  imports: [
    TypeOrmModule.forFeature([Item]),
    TypeOrmModule.forFeature([History]),
    TypeOrmModule.forFeature([Stock]),
  ],
  controllers: [ItemController],
  providers: [ItemService]
})
export class ItemModule {}
