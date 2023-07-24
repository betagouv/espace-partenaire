import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Bonjour, bienvenue dans votre nouvel espace partenaire';
  }
}
