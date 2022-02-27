import { Injectable,Inject } from '@nestjs/common';
import { CreateCategoryDto } from './dto/create-category.dto';
import { UpdateCategoryDto } from './dto/update-category.dto';
import { Category } from './stock.interface';
import { Model } from 'mongoose';
import { isEmpty } from 'rxjs';

@Injectable()
export class CategoriesService {

  constructor(
    @Inject('CATEGORIES_MODEL')
    private categoryModel: Model<Category>,
  ) {}

  async create(createCategoryDto: CreateCategoryDto): Promise<Category> {

   
   const createdStock = new this.categoryModel(createCategoryDto);
    return   createdStock.save();


 



    
  
  }

 

  async findAll(): Promise<Category[]> {
    return this.categoryModel.find().exec();
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
