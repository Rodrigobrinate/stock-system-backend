import { Client } from 'src/clients/entities/client.entity';
import { Stock } from 'src/stock/entities/stock.entity';
import { Entity, Column, PrimaryGeneratedColumn, ManyToMany,ManyToOne, OneToOne, JoinColumn, JoinTable } from 'typeorm';

@Entity()
export class Seals {
  @PrimaryGeneratedColumn()
  id: number;


  @ManyToOne(()=> Client, client => client.seals)
  @JoinColumn()
  client: Client;

  @ManyToMany(()=> Stock)
  @JoinTable()
  stock: Stock[];

  @Column()
  price: number; 

}