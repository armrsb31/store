import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { HtritemController } from './htritem.controller';
import { Htritem } from './htritem.entity';
import { HtritemService } from './htritem.service';

@Module({
  imports: [TypeOrmModule.forFeature([Htritem])],
  controllers: [HtritemController],
  providers: [HtritemService]
})
export class HtritemModule {}
