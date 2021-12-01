import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { HtritemController } from 'src/htritem/htritem.controller';
import { Htritem } from 'src/htritem/htritem.entity';
import { HtritemModule } from 'src/htritem/htritem.module';
import { HtritemService } from 'src/htritem/htritem.service';
import { ItemController } from './item.controller';
import { Item } from './item.entity';
import { ItemService } from './item.service';

@Module({
  imports: [
    HtritemModule,
    TypeOrmModule.forFeature([Item]),
    TypeOrmModule.forFeature([Htritem]),
    ItemModule
  ],
  controllers: [ItemController],
  providers: [ItemService]
})
export class ItemModule {}
