import { Stock } from 'src/stock/entities/stock.entity';
import { Entity, Column, PrimaryGeneratedColumn, JoinColumn, OneToOne, OneToMany } from 'typeorm';

@Entity()
export class Brand {
  @PrimaryGeneratedColumn() 
  id: number;

  @Column({ length: 500 })
  brand: string;

  @OneToMany(()=> Stock, stock => stock.brand)
  @JoinColumn()
  stock: Stock[];  

}