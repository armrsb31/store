import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Htritem } from 'src/htritem/htritem.entity';
import { HtritemModule } from 'src/htritem/htritem.module';
import { ItemController } from './item.controller';
import { Item } from './item.entity';
import { ItemService } from './item.service';

@Module({
  imports: [
    TypeOrmModule.forFeature([Item]),
    TypeOrmModule.forFeature([Htritem]),
  ],
  controllers: [ItemController],
  providers: [ItemService]
})
export class ItemModule {}
