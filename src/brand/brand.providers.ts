import { Connection } from 'typeorm';
import { BrandSchema } from '../schemas/brand.schema';
import { Brand } from './entities/brand.entity';

export const brandProviders = [
  {
    provide: 'BRAND_MODEL',
    useFactory: (connection: Connection) => connection.getRepository(Brand),
    inject: ['DATABASE_CONNECTION'], 
  },
];