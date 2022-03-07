import { CreateStockDto } from './dto/create-stock.dto';
import { UpdateStockDto } from './dto/update-stock.dto';
import { Injectable, Inject } from '@nestjs/common';
//import { Stock } from './stock.interface';
import { Model } from 'mongoose';
import { Stock } from './entities/stock.entity';
import { getConnection,getRepository, Like } from 'typeorm';

@Injectable()
export class StockService {

  constructor(
    @Inject('STOCK_MODEL')
    private stockModel: Model<Stock>,
  ) {}

  async create(createStockDto: CreateStockDto) {
    createStockDto.created_date = new Date()
    console.log(createStockDto)
    return await getConnection()
    .createQueryBuilder()
    .insert()
    .into(Stock)
    .values(createStockDto)
    .execute(); 

  } 

  async findAll(): Promise<Stock[]> {
    const a = await getRepository("seals").createQueryBuilder("seals")
    
    //.leftJoinAndSelect(Seals, "Seals", "Seals.client_id = Client.id")
   // .innerJoin("seals.cleints", "clients", "clients.id = :id", { id: this.Client.id })
    
    return await getRepository(Stock)
    .createQueryBuilder("stock")
    .innerJoinAndSelect("stock.brand", "brand")
    .innerJoinAndSelect("stock.category", "category")
    .innerJoinAndSelect("stock.fornecedores", "fornecedores")
    .getRawMany()
  }

  async findOne(id: string): Promise<Stock> {
    return this.stockModel.findOne({_id: id})
  }

async search(search): Promise<Stock[]> {
  /*const product =  this.stockModel.find({
       $or: [
         {name: {$regex: search}},
        {categories: {$regex: search}},
        {product_key: {$regex: search}} ]
})*/


const product = await getRepository(Stock).find({name: Like('%'+search+'%')})




  return product
}

  async update(id: String, updateStockDto: UpdateStockDto) {
    //return await this.stockModel.updateOne({_id: id.trim() }, updateStockDto).exec();
    
  }

  async remove(id: string) {
    //return await this.stockModel.deleteOne({id: id});
   // return await this.stockModel.deleteOne({ _id: id.trim() }).exec();
  }
}
