import { Connection } from 'mongoose';
import { SealsSchema } from '../schemas/seals.schema';


export const sealsProviders = [
    {
      provide: 'SEALS_MODEL',
      useFactory: (connection: Connection) => connection.model('Seals', SealsSchema),
      inject: ['DATABASE_CONNECTION'],
    },
  ];