import * as mongoose from 'mongoose';

export const databaseProviders = [
  {
    provide: 'DATABASE_CONNECTION',
    useFactory: (): Promise<typeof mongoose> =>
      mongoose.connect('mongodb+srv://rodrigo:147803106@cluster0.jlaij.mongodb.net/stock-system?retryWrites=true&w=majority'),
  },
];