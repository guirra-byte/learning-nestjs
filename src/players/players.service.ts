import { Injectable } from '@nestjs/common';
import { CreatePlayerDto } from './dtos/create-player.dto';
import { Player } from './interfaces/player.interface';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

@Injectable()
export class PlayersService {
  constructor(
    @InjectModel('Player') private readonly playerModel: Model<Player>,
  ) {}

  async createUpdatePlayer(createUserDto: CreatePlayerDto) {
    this.create(createUserDto);
  }

  private async create(createPlayerDto: CreatePlayerDto): Promise<Player> {
    const player = await new this.playerModel(createPlayerDto).save();
    return player;
  }

  async findPlayer(id: string): Promise<Player> {
    return await this.playerModel.findOne({ id }).exec();
  }

  async findPlayerByEmail(email: string): Promise<Player> {
    return this.playerModel.findOne({ email }).exec();
  }

  async findAllPlayers(): Promise<Player[]> {
    return this.playerModel.find().exec();
  }

  async updatePlayer(
    playerId: string,
    props: CreatePlayerDto,
  ): Promise<Player> {
    return await this.playerModel
      .findByIdAndUpdate({ _id: playerId }, { $set: props })
      .exec();
  }

  async removePlayer(id: string): Promise<any> {
    return await this.playerModel.findByIdAndDelete({ _id: id }).exec();
  }
}
