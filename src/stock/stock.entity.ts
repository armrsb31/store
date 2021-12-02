import { Item } from 'src/item/item.entity';
import { BaseEntity, Column,  Entity, OneToMany, PrimaryGeneratedColumn, UpdateDateColumn } from 'typeorm';
 
@Entity()
export class Stock extends BaseEntity{

  @PrimaryGeneratedColumn()
  id: number;

  @UpdateDateColumn({ type: 'date' })
  stockDate: Date;

  @Column({unique: true})
  stockName: string;

  @Column()
  stockCount: number;

  @OneToMany(() => Item, item => item.id)
  item: Item[];
}