import { Connection } from 'typeorm';
import { StockSchema } from '../schemas/stock.schema';
import { Stock } from './entities/stock.entity';

export const stockProviders = [
  {
    provide: 'STOCK_MODEL',
    useFactory: (connection: Connection) => connection.getRepository(Stock),
    inject: ['DATABASE_CONNECTION'],
  },
];