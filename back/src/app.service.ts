import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Bonjour, bienvenue dans votre nouvel espace partenaires';
  }
  getList(): Array<{ title: string; description: string }> {
    return [
      { title: 'AgentConnect0', description: 'blablabla' },
      { title: 'AgentConnect2', description: 'blablabla' },
      { title: 'AgentConnect3', description: 'blablabla' },
      { title: 'AgentConnect4', description: 'blablabla' },
    ];
  }
}
