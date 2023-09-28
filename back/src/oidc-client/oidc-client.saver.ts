import { CreateOidcClientDto } from './oidc-client.dto';

export class OidcClientSaver {
  save = (createOidcClientDto: CreateOidcClientDto): CreateOidcClientDto => {
    return createOidcClientDto;
  };
}
