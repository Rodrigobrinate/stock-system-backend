import { Connection } from 'mongoose';
import { BrandSchema } from '../schemas/brand.schema';

export const brandProviders = [
  {
    provide: 'BRAND_MODEL',
    useFactory: (connection: Connection) => connection.model('Brand', BrandSchema),
    inject: ['DATABASE_CONNECTION'], 
  },
];