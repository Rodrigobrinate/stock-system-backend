import { Connection } from 'typeorm';
import { ClientsSchema } from '../schemas/clients.schema';
import { Client } from './entities/client.entity';

export const clientsProviders = [
  {
    provide: 'CLIENTS_MODEL',
    useFactory: (connection: Connection) => connection.getRepository(Client),
    inject: ['DATABASE_CONNECTION'],
  },
];