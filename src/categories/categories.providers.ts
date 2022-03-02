import { Connection } from 'typeorm';
import { CategoriesSchema } from '../schemas/categories.schema';
import { Category } from './entities/category.entity';

export const categoryProviders = [
  {
    provide: 'CATEGORIES_MODEL',
    useFactory: (connection: Connection) => connection.getRepository(Category),
    inject: ['DATABASE_CONNECTION'],
  },
];