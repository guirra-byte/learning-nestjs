import { Provider } from '@nestjs/common';
import { Connection } from 'mongoose';
import { PlayerSchema } from '../player.schema';

export const mongoProvider: Provider[] = [
  {
    provide: 'PlayersRepository',
    useFactory: (connection: Connection) => {
      const players = connection.model('Player', PlayerSchema);
      return new PlayersRepository(players);
    },
    inject: ['DATABASE'],
  },
];
