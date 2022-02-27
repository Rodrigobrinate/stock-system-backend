import { Injectable, Inject } from '@nestjs/common';
import { Model } from 'mongoose';
import { CreateBrandDto } from './dto/create-brand.dto';
import { UpdateBrandDto } from './dto/update-brand.dto';
import { Brand } from './brand.interface';

@Injectable()
export class BrandService {

  constructor(
    @Inject('BRAND_MODEL')
    private brandModel: Model<Brand>,
  ) {}

  async create(createBrandDto: CreateBrandDto): Promise<Brand> {
    const createdStock = new this.brandModel(createBrandDto);
    return createdStock.save();
  }

  async findAll(): Promise<Brand[]> {
    return this.brandModel.find().exec();
  }

  findOne(id: number) {
    return `This action returns a #${id} brand`;
  }

  update(id: number, updateBrandDto: UpdateBrandDto) {
    return `This action updates a #${id} brand`;
  }

  remove(id: number) {
    return `This action removes a #${id} brand`;
  }
}
