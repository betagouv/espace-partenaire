import { Controller, Get } from '@nestjs/common';
import { KeysGenerator } from './keys-generator';
import { ClientKeys } from '../type';

@Controller()
export class KeysController {
  constructor(private readonly keysGenerator: KeysGenerator) {}

  @Get('/keys')
  getKeys(): ClientKeys {
    return this.keysGenerator.generate();
  }
}
