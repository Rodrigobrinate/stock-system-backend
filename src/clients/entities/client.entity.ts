import { Seals } from 'src/seals/entities/seal.entity';
import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';

@Entity()
export class Client {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  client_key: string;

  @Column({ length: 500 })
  name: string;

  @OneToMany(()=> Seals, seals => seals.client)
  seals: Seals;

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

  @Column({nullable: true})
  cnpj: string;
  
}