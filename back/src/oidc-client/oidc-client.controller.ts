import {
  Body,
  Controller,
  HttpException,
  HttpStatus,
  Post,
} from '@nestjs/common';
import { CreateOidcClientDto } from './oidc-client.dto';
import { OidcClientSaver } from './oidc-client.saver';

@Controller('oidc-clients')
export class OidcClientController {
  constructor(private readonly oidcClientSaver: OidcClientSaver) {
    this.oidcClientSaver = oidcClientSaver;
  }
  @Post()
  async create(@Body() createOidcClientDto: CreateOidcClientDto) {
    try {
      return await this.oidcClientSaver.save(createOidcClientDto);
    } catch (error) {
      throw new HttpException(
        {
          status: HttpStatus.FORBIDDEN,
          error: 'This is a custom message',
        },
        HttpStatus.FORBIDDEN,
        {
          cause: error,
        }
      );
    }
  }
}
