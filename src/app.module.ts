import { Module } from '@nestjs/common';
import { PlayersModule } from './players/players.module';
import { DatabaseModule } from './database/database.module';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [PlayersModule, DatabaseModule, MongooseModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
