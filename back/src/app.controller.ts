import { Controller, Get } from '@nestjs/common';
import { KeysGenerator } from './keys/KeysGenerator';
import { ClientKeys } from './type';

@Controller()
export class AppController {
  constructor(private readonly keysGenerator: KeysGenerator) {}

  @Get('/welcome')
  getHello(): string {
    return "Bienvenue sur l'espace partenaire.";
  }

  @Get('/keys')
  getKeys(): ClientKeys {
    return this.keysGenerator.generate();
  }
}
