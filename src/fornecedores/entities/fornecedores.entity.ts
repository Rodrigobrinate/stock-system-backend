import { Seals } from 'src/seals/entities/seal.entity';
import { Stock } from 'src/stock/entities/stock.entity';
import { User } from 'src/users/entities/user.entity';
import { Entity, Column, PrimaryGeneratedColumn, OneToOne, ManyToOne, JoinColumn, OneToMany } from 'typeorm';

@Entity()
export class Fornecedores {
  @PrimaryGeneratedColumn()
  id: number;
  
  @Column({ length: 500 })
  name: string;

  @Column('text')
  district: string;

  @Column()
  address: string

  @Column()
  phone: string;

  @Column()
  city: string;

  @Column()
  state: string;

  @Column()
  cnpj: string;

  @OneToMany(() => Stock, stock => stock.fornecedores)
  @JoinColumn()
    stock: Stock[]; 

  
}