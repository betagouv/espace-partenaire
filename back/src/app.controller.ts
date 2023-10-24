import { Controller, Get } from '@nestjs/common';
@Controller()
export class AppController {
  @Get('/welcome')
  getHello(): string {
    return 'Bonjour, bienvenue dans votre nouvel espace partenaires';
  }
}
