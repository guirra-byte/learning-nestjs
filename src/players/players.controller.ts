import {
  Controller,
  Post,
  Body,
  Param,
  Get,
  Patch,
  Delete,
  HttpCode,
} from '@nestjs/common';
import { CreatePlayerDto } from './dtos/create-player.dto';
import { PlayersService } from './players.service';

@Controller('players')
export class PlayersController {
  constructor(private readonly playersService: PlayersService) {}
  @HttpCode(200)
  @Post()
  async createUpdatePlayer(@Body() createPlayerDto: CreatePlayerDto) {
    return await this.playersService.createUpdatePlayer(createPlayerDto);
  }

  @Get(':id')
  async findPlayer(@Param() playerId: string) {
    return await this.playersService.findPlayer(playerId);
  }

  @Get(':email')
  async findPlayerByEmail(@Param() playerEmail: string) {
    return await this.playersService.findPlayerByEmail(playerEmail);
  }

  @Get()
  async findAllPlayers() {
    const players = await this.findAllPlayers();
    return players;
  }

  @Patch(':id')
  async updatePlayer(
    @Param() playerId: string,
    @Body() props: CreatePlayerDto,
  ) {
    await this.updatePlayer(playerId, props);
  }

  @Delete(':id')
  async removePlayer(@Param() playerId: string) {
    await this.removePlayer(playerId);
  }
}
