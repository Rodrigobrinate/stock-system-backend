import { Injectable } from '@nestjs/common';
import { CreateFornecedoreDto } from './dto/create-fornecedore.dto';
import { Fornecedores } from './entities/fornecedores.entity';
import { getConnection, getRepository } from 'typeorm';
import { UpdateFornecedoreDto } from './dto/update-fornecedore.dto';

@Injectable()
export class FornecedoresService {
  async create(createFornecedoreDto: CreateFornecedoreDto) {
    console.log(createFornecedoreDto)
   // return  getConnection().getRepository(Fornecedores).save(createFornecedoreDto)
return await getConnection()
.createQueryBuilder()
.insert()
.into(Fornecedores)
.values([
   createFornecedoreDto
 ]) 
.execute();
  }   

  async findAll() {
    return await getRepository(Fornecedores)
    .createQueryBuilder("fornecedores").getMany()
  }

  findOne(id: number) {
    return `This action returns a #${id} fornecedore`;
  }

  update(id: number, updateFornecedoreDto: UpdateFornecedoreDto) {
    return `This action updates a #${id} fornecedore`;
  }

  remove(id: number) {
    return `This action removes a #${id} fornecedore`;
  }
}
