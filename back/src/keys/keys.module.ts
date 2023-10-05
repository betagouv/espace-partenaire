import { Module } from '@nestjs/common';
import { KeysController } from './key.controller';
import { KeysGenerator } from './keys-generator';

@Module({
  imports: [],
  controllers: [KeysController],
  providers: [KeysGenerator],
  exports: [KeysGenerator],
})
export class KeysModule {}
