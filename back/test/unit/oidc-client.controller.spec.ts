import { OidcClientSaver } from '../../src/oidc-client';
import { OidcClientController } from '../../src/oidc-client/oidc-client.controller';
import { CreateOidcClientDto } from '../../src/oidc-client/oidc-client.dto';
import { Test, TestingModule } from '@nestjs/testing';

describe('OidcClientController', () => {
  let oidcController: OidcClientController;
  const oidcClientSaverMock = {
    save: jest.fn(),
  };

  describe('Create()', () => {
    beforeEach(async () => {
      const app: TestingModule = await Test.createTestingModule({
        controllers: [OidcClientController],
        providers: [OidcClientSaver],
      })
        .overrideProvider(OidcClientSaver)
        .useValue(oidcClientSaverMock)
        .compile();

      oidcController = app.get<OidcClientController>(OidcClientController);
    });

    it('should call oidcClientSaver.save', async () => {
      await oidcController.create(new CreateOidcClientDto());

      expect(oidcClientSaverMock.save).toHaveBeenCalledTimes(1);
    });
  });
});
