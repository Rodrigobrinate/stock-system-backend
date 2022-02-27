import { Connection } from 'mongoose';
import { CategoriesSchema } from '../schemas/categories.schema';

export const categoryProviders = [
  {
    provide: 'CATEGORIES_MODEL',
    useFactory: (connection: Connection) => connection.model('Categories', CategoriesSchema),
    inject: ['DATABASE_CONNECTION'],
  },
];