import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { KeysGenerator } from './keys/KeysGenerator';

@Module({
  imports: [],
  controllers: [AppController],
  providers: [AppService, KeysGenerator],
})
export class AppModule {}
