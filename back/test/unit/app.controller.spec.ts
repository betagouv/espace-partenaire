import { Test, TestingModule } from '@nestjs/testing';
import { AppController } from '../../src/app.controller';
import { AppService } from '../../src/app.service';
import { KeysGenerator } from '../../src/keys/KeysGenerator';

describe('AppController', () => {
  let appController: AppController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [AppController],
      providers: [AppService, KeysGenerator],
    }).compile();

    appController = app.get<AppController>(AppController);
  });

  describe('root', () => {
    it('should return "Hello World!"', () => {
      expect(appController.getHello()).toBe(
        'Bonjour, bienvenue dans votre nouvel espace partenaires'
      );
    });
  });
});
