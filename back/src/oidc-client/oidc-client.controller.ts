import { Body, Controller, Post } from '@nestjs/common';
import { CreateOidcClientDto } from './oidc-client.dto';
import { OidcClientSaver } from './oidc-client.saver';

@Controller('oidc-client')
export class OidcClientController {
  constructor(private readonly oidcClientSaver: OidcClientSaver) {
    this.oidcClientSaver = oidcClientSaver;
  }
  @Post()
  async create(@Body() createOidcClientDto: CreateOidcClientDto) {
    console.log(createOidcClientDto.clientDescription);
    return this.oidcClientSaver.save(createOidcClientDto);
  }
}
