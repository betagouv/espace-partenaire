import { OidcClientController } from '../../src/oidc-client/oidc-client.controller';
import { CreateOidcClientDto } from '../../src/oidc-client/oidc-client.dto';
import { Test, TestingModule } from '@nestjs/testing';

describe('OidcClientController', () => {
  it('should call oidcClientSaver.save', async () => {
    const oidcClientSaver = {
      save: jest.fn(),
    };

    const controller = new OidcClientController(oidcClientSaver);

    const createOidcClientDto = new CreateOidcClientDto();

    await controller.create(createOidcClientDto);

    expect(oidcClientSaver.save).toHaveBeenCalledTimes(1);
  });
});
