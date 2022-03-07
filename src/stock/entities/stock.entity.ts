import { join } from 'path/posix';
import { brandProviders } from 'src/brand/brand.providers';
import { Brand } from 'src/brand/entities/brand.entity';
import { Category } from 'src/categories/entities/category.entity';
import { Fornecedores } from 'src/fornecedores/entities/fornecedores.entity';
import { Seals } from 'src/seals/entities/seal.entity';
import { Entity, Column, PrimaryGeneratedColumn,OneToOne, ManyToMany, JoinColumn, JoinTable, ManyToOne, OneToMany } from 'typeorm';

@Entity()
export class Stock {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 500 })
  product_key: string;

  @Column('text')
  name: string;

  


  @Column()
  location: string;

  @Column('int')
  quantities: number;

  @Column('float')
  cost_price: number;
  @Column()
  sale_price: number;

  
  @ManyToOne(() => Fornecedores, fornecedores => fornecedores.stock)
  @JoinColumn()
  fornecedores: Fornecedores;
  
  @ManyToOne(() => Category, category => category.stock)
  @JoinColumn()
  category: Category;

  @ManyToOne(() => Brand, brand => brand.stock)
  @JoinColumn()
  brand: Brand

  @Column('datetime')
  created_date: Date;

  
  
}
