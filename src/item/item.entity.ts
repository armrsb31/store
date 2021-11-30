import { Htritem } from 'src/htritem/htritem.entity';
import { BaseEntity, Column, CreateDateColumn, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
 
@Entity()
export class Item extends BaseEntity{
  @PrimaryGeneratedColumn()
  id: number;

  @CreateDateColumn({ type: 'date' })
  itemDate: Date;

  @Column({unique:true})
  itemName: string;

  @Column()
  itemCount: number;

  @OneToMany(() => Htritem, htrItem => htrItem.id)
  htrItem: Htritem[];
}