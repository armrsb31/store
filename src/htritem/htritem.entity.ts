import { Item } from 'src/item/item.entity';
import { BaseEntity, Column, CreateDateColumn, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
 
@Entity()
export class Htritem extends BaseEntity{
  @PrimaryGeneratedColumn()
  id: number;

  @CreateDateColumn({ type: 'date' })
  htrItemDate: Date;

  @Column()
  htrItemCount: number;

  @ManyToOne(() => Item, item => item.id)
  item: Item | number;

}