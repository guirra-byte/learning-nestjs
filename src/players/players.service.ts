import { Injectable, Logger } from '@nestjs/common';
import { CreatePlayerDto } from './dtos/create-player.dto';
import { Player } from './interfaces/player.interface';
import { v4 as uuidV4 } from 'uuid';
import { NotFoundException } from '@nestjs/common';

@Injectable()
export class PlayersService {
  private logger: Logger = new Logger(PlayersService.name);
  private players: Player[] = [];

  async createUpdatePlayer(createUserDto: CreatePlayerDto) {
    this.create(createUserDto);
  }

  private async create(createPlayerDto: CreatePlayerDto): Promise<Player> {
    const { name, email, password, phoneNumber } = createPlayerDto;

    const ensureEmailExists = this.players.find(
      (player) => player.email === email,
    );

    if (ensureEmailExists) {
      await this.updatePlayer(ensureEmailExists.id, createPlayerDto);
    }

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

  async findPlayer(id: string): Promise<Player[] | Player> {
    const user = this.players.find((player) => player.id === id);

    if (!user) {
      return this.players;
    }

    return user;
  }

  async findPlayerByEmail(email: string): Promise<Player> {
    return this.players.find((player) => player.email === email);
  }

  async findAllPlayers(): Promise<Player[]> {
    return this.players;
  }

  async updatePlayer(playerId: string, props: CreatePlayerDto): Promise<void> {
    const getUser = this.players.find((user) => user.id === playerId);

    if (!getUser) {
      throw new NotFoundException(`Cannot find player by #${playerId} id!`);
    }

    Object.assign(getUser, props);
  }

  async removePlayer(id: string): Promise<void> {
    const getUserIndex = this.players.findIndex((player) => player.id === id);

    if (getUserIndex === -1) {
      throw new NotFoundException(`Cannot dins player by #${id} id!`);
    }

    throw new NotFoundException(`Cannot find player by #${id} id!`);
  }
}
