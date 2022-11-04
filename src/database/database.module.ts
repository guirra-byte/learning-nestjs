import { Module } from '@nestjs/common';
import { databaseProvider } from './db.provider';

@Module({
  exports: [...databaseProvider],
  providers: [...databaseProvider],
})
export class DatabaseModule {}
