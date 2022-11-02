import {
  Controller,
  Post,
  Body,
  Param,
  Get,
  Patch,
  Delete,
} from '@nestjs/common';
import { CreatePlayerDto } from './dtos/create-player.dto';

@Controller('players')
export class PlayersController {
  @Post('new')
  async createUpdatePlayer(@Body() createPlayerDto: CreatePlayerDto) {
    return JSON.stringify(createPlayerDto);
  }

  @Get(':id')
  async findPlayer(@Param() playerId: string) {
    return JSON.stringify({ playerId });
  }

  @Get()
  async findAllPlayers() {
    return JSON.stringify([{ name: 'Matheus Guirra Sousa' }]);
  }

  @Patch(':id')
  async updatePlayer(
    @Param() playerId: string,
    @Body() props: CreatePlayerDto,
  ) {
    const player = {
      name: 'Matheus',
      phoneNumber: '92839756',
      email: 'guirramatheus1@gmail.com',
      id: playerId,
    };

    Object.assign(player, props);
    return player;
  }

  @Delete(':id')
  async removePlayer(@Param() playerId: string) {
    const players = [
      {
        name: 'Matheus',
        phoneNumber: '92839756',
        email: 'guirramatheus1@gmail.com',
        id: '1',
      },
      {
        name: 'Matheus',
        phoneNumber: '92839756',
        email: 'guirramatheus1@gmail.com',
        id: '2',
      },
    ];

    for (let i = 0; i <= players.length; i++) {
      const player = players[i];
      const { id } = player;

      if (id === playerId) {
        return JSON.stringify(player);
      }

      return undefined;
    }
  }
}
