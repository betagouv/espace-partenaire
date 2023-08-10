import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { KeysGenerator } from './keys/KeysGenerator';
import { ClientKeys } from './type';

@Controller()
export class AppController {
  constructor(
    private readonly appService: AppService,
    private readonly keysGenerator: KeysGenerator
  ) {}

  @Get('/welcome')
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('/list')
  getList(): any[] {
    return this.appService.getList();
  }
  @Get('/keys')
  getKeys(): ClientKeys {
    return this.keysGenerator.generate();
  }
}
