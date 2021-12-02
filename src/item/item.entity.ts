import { History } from 'src/history/history.entity';
import { Stock } from 'src/stock/stock.entity';
import { BaseEntity, Column, Entity, JoinColumn, ManyToOne, OneToMany, PrimaryGeneratedColumn, UpdateDateColumn } from 'typeorm';
 
@Entity()
export class Item extends BaseEntity{
  @PrimaryGeneratedColumn()
  id: number;

  @UpdateDateColumn({ type: 'date' })
  itemDate: Date;

  @Column()
  itemName: string;

  @Column()
  itemCount: number;

  @OneToMany(() => History, history => history.id)
  history: History[];

  @Column('int', { nullable: true })
  stockId: number;

  @ManyToOne(() => Stock, stock => stock.id)
  @JoinColumn({ name: 'stockId' })
  stock: Stock | number;

}