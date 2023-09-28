import { InjectRepository } from '@nestjs/typeorm';
import { CreateOidcClientDto } from './oidc-client.dto';
import { OidcClient } from 'src/entities/oidc-client.entity';
import { Repository } from 'typeorm';

export class OidcClientSaver {
  constructor(
    @InjectRepository(OidcClient)
    private oidcClientRepository: Repository<OidcClient>
  ) {}
  save = (createOidcClientDto: CreateOidcClientDto): CreateOidcClientDto => {
    const myOidcClient = new OidcClient();
    myOidcClient.client_id = createOidcClientDto.clientId;
    myOidcClient.client_secret = createOidcClientDto.clientSecret;
    myOidcClient.client_name = createOidcClientDto.clientName;
    myOidcClient.redirect_uris = createOidcClientDto.redirectUris;
    myOidcClient.post_logout_redirect_uris =
      createOidcClientDto.postLogoutRedirectUris;
    myOidcClient.scope = createOidcClientDto.scope;

    this.oidcClientRepository.save(myOidcClient);

    return createOidcClientDto;
  };
}
