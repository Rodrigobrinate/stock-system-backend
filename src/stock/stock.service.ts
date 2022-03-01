import { CreateStockDto } from './dto/create-stock.dto';
import { UpdateStockDto } from './dto/update-stock.dto';
import { Injectable, Inject } from '@nestjs/common';
import { Stock } from './stock.interface';
import { Model } from 'mongoose';


@Injectable()
export class StockService {

  constructor(
    @Inject('STOCK_MODEL')
    private stockModel: Model<Stock>,
  ) {}

  async create(createStockDto: CreateStockDto): Promise<Stock> {
    const createdStock = new this.stockModel(createStockDto);
    return createdStock.save();
  }

  async findAll(): Promise<Stock[]> {
    return this.stockModel.find().exec();
  }

  async findOne(id: string): Promise<Stock> {
    return this.stockModel.findOne({_id: id})
  }

async search(search): Promise<Stock[]> {
  const product =  this.stockModel.find({
       $or: [
         {name: {$regex: search}},
        {categories: {$regex: search}},
        {product_key: {$regex: search}} ]
})


  return product
}

  async update(id: String, updateStockDto: UpdateStockDto) {
    return await this.stockModel.updateOne({_id: id.trim() }, updateStockDto).exec();
    
  }

  async remove(id: string) {
    //return await this.stockModel.deleteOne({id: id});
    return await this.stockModel.deleteOne({ _id: id.trim() }).exec();
  }
}
