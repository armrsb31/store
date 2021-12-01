import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Item } from 'src/item/item.entity';
import { ItemModule } from 'src/item/item.module';
import { ItemService } from 'src/item/item.service';
import { HtritemController } from './htritem.controller';
import { Htritem } from './htritem.entity';
import { HtritemService } from './htritem.service';

@Module({
  imports: [
    TypeOrmModule.forFeature([Item]),
    TypeOrmModule.forFeature([Htritem]),
  ],
  controllers: [HtritemController],
  providers: [HtritemService, ItemService]
})
export class HtritemModule {}
