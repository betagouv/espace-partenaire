import { InjectRepository } from '@nestjs/typeorm';
import { CreateOidcClientDto } from './oidc-client.dto';
import { OidcClient } from 'src/entities/oidc-client.entity';
import { Repository } from 'typeorm';

export class OidcClientSaver {
  constructor(
    @InjectRepository(OidcClient)
    private oidcClientRepository: Repository<OidcClient>
  ) {}

  private hydrate = (dto: CreateOidcClientDto): OidcClient => {
    const oidcClient = new OidcClient();
    oidcClient.client_description = dto.clientDescription;
    oidcClient.client_id = dto.clientId;
    oidcClient.client_secret = dto.clientSecret;
    oidcClient.client_name = dto.clientName;
    oidcClient.redirect_uris = dto.redirectUris;
    oidcClient.post_logout_redirect_uris = dto.postLogoutRedirectUris;
    oidcClient.scope = dto.scope;
    return oidcClient;
  };

  save = (createOidcClientDto: CreateOidcClientDto): CreateOidcClientDto => {
    try {
      const oidcClient = this.hydrate(createOidcClientDto);
      this.oidcClientRepository.save(oidcClient);
      return createOidcClientDto;
    } catch (error) {
      console.error(error);
      throw new Error(`Une erreur s'est produite lors de la création.`);
    }
  };
}
