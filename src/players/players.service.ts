import { Injectable, Logger } from '@nestjs/common';
import { CreatePlayerDto } from './dtos/create-player.dto';
import { Player } from './interfaces/player.interface';
import { v4 as uuidV4 } from 'uuid';

@Injectable()
export class PlayersService {
  private logger: Logger = new Logger(PlayersService.name);
  private players: Player[] = [];

  createUpdatePlayer(createUserDto: CreatePlayerDto) {
    this.create(createUserDto);
  }

  private create(createPlayerDto: CreatePlayerDto): Player {
    const { name, email, password, phoneNumber } = createPlayerDto;
    const player: Player = {
      id: uuidV4(),
      name,
      email,
      password,
      phoneNumber,
      ranking: 'A',
      rankPosition: 1,
      urlPlayerAvatar: 'www.google.com/foto123.png',
    };

    this.logger.log(`createUpdatePlayer: ${JSON.stringify(player)}`);
    this.players.push(player);
    return player;
  }
}
