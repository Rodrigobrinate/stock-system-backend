import { Connection } from 'typeorm';
import { UsersSchema } from '../schemas/users.schema';
import { User } from './entities/user.entity';

export const usersProviders = [
  {
    provide: 'USERS_MODEL',
    useFactory: (connection: Connection) => connection.getRepository(User),
    inject: ['DATABASE_CONNECTION'],
  },
];