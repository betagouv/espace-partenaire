import { InjectRepository } from '@nestjs/typeorm';
import { CreateOidcClientDto } from './oidc-client.dto';
import { OidcClient } from './oidc-client.entity';
import { Repository } from 'typeorm';
import { v4 as uuidv4 } from 'uuid';

export class OidcClientSaver {
  constructor(
    @InjectRepository(OidcClient)
    private oidcClientRepository: Repository<OidcClient>
  ) {}

  oidcClient = new OidcClient();

  private hydrate = (dto: CreateOidcClientDto, oidcClient): OidcClient => {
    oidcClient.client_description = dto.clientDescription;
    oidcClient.client_id = dto.clientId;
    oidcClient.client_secret = dto.clientSecret;
    oidcClient.client_name = dto.clientName;
    oidcClient.redirect_uris = dto.redirectUris;
    oidcClient.post_logout_redirect_uris = dto.postLogoutRedirectUris;
    oidcClient.scope = dto.scope;
    oidcClient.id = uuidv4();
    return oidcClient;
  };

  save = async (
    createOidcClientDto: CreateOidcClientDto
  ): Promise<CreateOidcClientDto> => {
    const oidcClient = this.hydrate(createOidcClientDto, this.oidcClient);
    await this.oidcClientRepository.save(oidcClient);
    return createOidcClientDto;
  };
}
