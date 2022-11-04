import { Provider } from '@nestjs/common';
import * as mongoose from 'mongoose';

export const databaseProvider: Provider[] = [
  {
    provide: 'DATABASE',
    useFactory: () => {
      mongoose.connect(
        'mongodb+srv://mabel:Mabel085.@cluster0.g0tgsca.mongodb.net/smartranking?retryWrites=true&w=majority',
      );
    },
  },
];
