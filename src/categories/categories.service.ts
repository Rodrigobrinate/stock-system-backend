import { Injectable,Inject } from '@nestjs/common';
import { CreateCategoryDto } from './dto/create-category.dto';
import { UpdateCategoryDto } from './dto/update-category.dto';
//import { Category } from './stock.interface';
import { Model } from 'mongoose';
import { isEmpty } from 'rxjs';
import { getRepository , getConnection} from 'typeorm';
import { Category } from './entities/category.entity';

@Injectable()
export class CategoriesService {

  constructor(
    @Inject('CATEGORIES_MODEL')
    private categoryModel: Model<Category>,
  ) {}

  async create(createCategoryDto: CreateCategoryDto) {
   //const createdStock = new this.categoryModel(createCategoryDto);
    //return   createdStock.save();


   return await getConnection()
    .createQueryBuilder()
    .insert()
    .into(Category)
    .values(createCategoryDto)
    .execute();
  }

 

  async findAll(): Promise<Category[]> {
    return await getRepository(Category)
    .createQueryBuilder("category").getMany()
  }

 
  findOne(id: number) {
    return `This action returns a #${id} category`;
  }
 
  

  update(id: number, updateCategoryDto: UpdateCategoryDto) {
    return `This action updates a #${id} category`;
  }

  remove(id: number) {
    return `This action removes a #${id} category`;
  }
}
