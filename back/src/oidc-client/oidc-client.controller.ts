import { Body, Controller, Post } from '@nestjs/common';
import { CreateOidcClientDto } from './oidc-client.dto';

@Controller('oidc-client')
export class OidcClientController {
  @Post()
  async create(@Body() createOidcClientDto: CreateOidcClientDto) {
    console.log(createOidcClientDto);
    return 'hello oidc client';
  }
}
