import { Brand } from 'src/brand/entities/brand.entity';
import { Category } from 'src/categories/entities/category.entity';
import { Entity, Column, PrimaryGeneratedColumn,OneToOne } from 'typeorm';

@Entity()
export class Stock {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 500 })
  product_key: string;

  @Column('text')
  name: string;

  @OneToOne(() => Brand)
  @Column()
  brand_id: number;

  @Column('int')
  quantities: number;

  @Column()
  cost_price: number;
  @Column()
  sale_price: number;

  
  @OneToOne(() => Category)
  @Column()
  category_id: number;
}
