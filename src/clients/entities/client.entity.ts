import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Client {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  client_key: string;

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
  cpf: string;

  @Column()
  rg: string;
}