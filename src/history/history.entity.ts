import { Item } from 'src/item/item.entity';
import { BaseEntity, Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
 
@Entity()
export class History extends BaseEntity{
  @PrimaryGeneratedColumn()
  id: number;

  @CreateDateColumn({ type: 'date' })
  historyDate: Date;

  @Column()
  historyCount: number;

  @Column('int', { nullable: true })
  itemId: number;

  @ManyToOne(() => Item, item => item.id)
  @JoinColumn({ name: 'itemId' })
  item: Item | number;

  @Column()
  isDelete: boolean;

}