import { Injectable, Inject } from '@nestjs/common';
import { CreateClientDto } from './dto/create-client.dto';
import { UpdateClientDto } from './dto/update-client.dto';
//import { Client } from './client.interface';
import { Model } from 'mongoose';
import { Client } from './entities/client.entity';
import { Connection, getConnection, getRepository,Like } from 'typeorm';
import { connect } from 'http2';

@Injectable()
export class ClientsService {

  constructor(
    @Inject('CLIENTS_MODEL')
    private clientModel: Model<Client>,
  ) {}


  async create(createClientDto: CreateClientDto) {
    createClientDto.cnpj = '0'
    console.log(createClientDto)
    
    return await getConnection()
    .createQueryBuilder()
    .insert()
    .into(Client)
    .values(createClientDto)
    .execute();

  }


  async findAll(): Promise<Client[]> {
    return await getRepository(Client)
    .createQueryBuilder("clients").getMany()
  }

  findOne(id: number) {
    return `This action returns a #${id} client`;
  }

  async search(search) {
   /* const client =  this.clientModel.find({
         $or: [
           {name: {$regex: search}},
          {state: {$regex: search}},
          {district: {$regex: search}} ]
  })
  return client*/

  const client = await getRepository(Client).find({name: Like('%'+search+'%')})
return client


}

  update(id: number, updateClientDto: UpdateClientDto) {
    return `This action updates a #${id} client`;
  }

  remove(id: number) {
    return `This action removes a #${id} client`;
  }
}
