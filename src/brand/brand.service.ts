import { Injectable, Inject } from '@nestjs/common';
import { Model } from 'mongoose';
import { CreateBrandDto } from './dto/create-brand.dto';
import { UpdateBrandDto } from './dto/update-brand.dto';
//import { Brand } from './brand.interface';
import { Brand } from './entities/brand.entity';
import { getConnection ,getRepository} from 'typeorm';

@Injectable()
export class BrandService {

  constructor(
    @Inject('BRAND_MODEL')
    private brandModel: Model<Brand>,
  ) {}

  async create(createBrandDto: CreateBrandDto) {
    return await getConnection()
    .createQueryBuilder()
    .insert()
    .into(Brand)
    .values(createBrandDto)
    .execute();
  
  }

  async findAll(): Promise<Brand[]> {
    return await getRepository(Brand)
    .createQueryBuilder("brand").getMany()
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
