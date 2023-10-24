import { OidcClientSaver } from '../../src/oidc-client/oidc-client.saver';
import { Repository } from 'typeorm';
import { CreateOidcClientDto } from '../../src/oidc-client/oidc-client.dto';
import { OidcClient } from '../../src/oidc-client/oidc-client.entity';

jest.mock('uuid', () => ({ v4: () => 'hjhj87878' }));
describe('OidcClientSaver', () => {
  let oidcClientSaver: OidcClientSaver;
  let oidcClientRepository: Repository<OidcClient>;

  beforeEach(() => {
    oidcClientRepository = {
      save: jest.fn(),
    } as unknown as Repository<OidcClient>;

    oidcClientSaver = new OidcClientSaver(oidcClientRepository);
  });

  it('should save OidcClient', async () => {
    const createOidcClientDto = new CreateOidcClientDto();
    createOidcClientDto.clientDescription = 'Description';
    createOidcClientDto.clientId = 'ClientID';
    createOidcClientDto.clientSecret = 'ClientSecret';
    createOidcClientDto.clientName = 'ClientName';
    createOidcClientDto.redirectUris = ['http://example.com/callback'];
    createOidcClientDto.postLogoutRedirectUris = ['http://example.com/logout'];
    createOidcClientDto.scope = ['name', 'lastname'];

    await oidcClientSaver.save(createOidcClientDto);

    const id = oidcClientSaver.returnUuid();

    expect(oidcClientRepository.save).toHaveBeenCalledWith({
      client_description: createOidcClientDto.clientDescription,
      client_id: createOidcClientDto.clientId,
      client_secret: createOidcClientDto.clientSecret,
      client_name: createOidcClientDto.clientName,
      redirect_uris: createOidcClientDto.redirectUris,
      post_logout_redirect_uris: createOidcClientDto.postLogoutRedirectUris,
      scope: createOidcClientDto.scope,
      id: id,
    });
  });
});
