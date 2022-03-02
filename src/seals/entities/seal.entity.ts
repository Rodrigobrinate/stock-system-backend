import { Client } from 'src/clients/entities/client.entity';
import { Stock } from 'src/stock/entities/stock.entity';
import { Entity, Column, PrimaryGeneratedColumn, ManyToMany, OneToOne } from 'typeorm';

@Entity()
export class Seals {
  @PrimaryGeneratedColumn()
  id: number;



  @OneToOne(()=> Client)
  @Column('int')
  client_id: number;

  @Column()
  price: number;

}