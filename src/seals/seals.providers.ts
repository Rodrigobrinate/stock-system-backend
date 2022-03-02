import { Connection } from 'typeorm';
import { SealsSchema } from '../schemas/seals.schema';
import { Seals } from './entities/seal.entity';


export const sealsProviders = [
    {
      provide: 'SEALS_MODEL',
      useFactory: (connection: Connection) => connection.getRepository(Seals),
      inject: ['DATABASE_CONNECTION'],
    },
  ];