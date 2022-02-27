import { Injectable, Inject } from '@nestjs/common';
import { CreateSealDto } from './dto/create-seal.dto';
import { UpdateSealDto } from './dto/update-seal.dto';
import { Seals } from './seals.interface';
import { Model } from 'mongoose';

@Injectable()
export class SealsService {

  constructor(
    @Inject('SEALS_MODEL')
    private sealsModel: Model<Seals>,
  ) {}

  

 
    async create(createSealDto: CreateSealDto): Promise<Seals> {
      const createdSeal = new this.sealsModel(createSealDto);
      return createdSeal.save();
    }
  

  findAll() {
    return this.sealsModel.find().exec();
  }

  findOne(id: number) {
    return this.sealsModel.findOne({id: id})
  }

  async update(id: String, updateSealDto: UpdateSealDto) {
    return await this.sealsModel.updateOne({_id: id.trim() }, updateSealDto).exec();
    
  }

  async remove(id: string) {
    //return await this.stockModel.deleteOne({id: id});
    return await this.sealsModel.deleteOne({ _id: id.trim() }).exec();
    
    
  }
}
