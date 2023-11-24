import {
  Body,
  Controller,
  Get,
  HttpException,
  HttpStatus,
  Param,
  Post,
} from '@nestjs/common';
import { CreateOidcClientDto } from './oidc-client.dto';
import { OidcClientSaver } from './oidc-client.saver';

@Controller('oidc-clients')
export class OidcClientController {
  constructor(private readonly oidcClientSaver: OidcClientSaver) {
    this.oidcClientSaver = oidcClientSaver;
  }

  @Get('/')
  async findAll() {
    return [
      {
        clientDescription: 'Description',
        clientId: 'clientId',
        clientSecret: 'ClientSecret',
        clientName: 'Rebecca Project 123',
        redirectUris: ['http://example.com/callback'],
        postLogoutRedirectUris: ['http://example.com/logout'],
        scope: ['firstname', 'lastname'],
      },
    ] satisfies CreateOidcClientDto[];
  }

  @Get('/:id')
  async find_by_id(@Param('id') id: string) {
    return {
      clientDescription: 'Description',
      clientId: 'clientId',
      clientSecret: 'ClientSecret',
      clientName: 'Rebecca Project 123',
      redirectUris: ['http://example.com/callback'],
      postLogoutRedirectUris: ['http://example.com/logout'],
      scope: ['firstname', 'lastname'],
    } satisfies CreateOidcClientDto;
  }

  @Post()
  async create(@Body() createOidcClientDto: CreateOidcClientDto) {
    try {
      return await this.oidcClientSaver.save(createOidcClientDto);
    } catch (error) {
      throw new HttpException(
        {
          status: HttpStatus.BAD_REQUEST,
          error: `Error occurs : ${error.message}`,
        },
        HttpStatus.BAD_REQUEST,
        {
          cause: error,
        }
      );
    }
  }
}
