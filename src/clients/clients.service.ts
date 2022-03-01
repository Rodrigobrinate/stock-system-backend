import { Injectable, Inject } from '@nestjs/common';
import { CreateClientDto } from './dto/create-client.dto';
import { UpdateClientDto } from './dto/update-client.dto';
import { Client } from './client.interface';
import { Model } from 'mongoose';

@Injectable()
export class ClientsService {

  constructor(
    @Inject('CLIENTS_MODEL')
    private clientModel: Model<Client>,
  ) {}


  async create(createClientDto: CreateClientDto): Promise<Client> {
   const createdClient = new this.clientModel(createClientDto);
    return   createdClient.save();
  }

  async findAll(): Promise<Client[]> {
    return this.clientModel.find().exec();
  }

  findOne(id: number) {
    return `This action returns a #${id} client`;
  }

  async search(search): Promise<Client[]> {
    const client =  this.clientModel.find({
         $or: [
           {name: {$regex: search}},
          {state: {$regex: search}},
          {district: {$regex: search}} ]
  })
  return client
}

  update(id: number, updateClientDto: UpdateClientDto) {
    return `This action updates a #${id} client`;
  }

  remove(id: number) {
    return `This action removes a #${id} client`;
  }
}
