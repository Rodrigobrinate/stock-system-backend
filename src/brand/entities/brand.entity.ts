import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Brand {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 500 })
  brand: string;

}