import { Controller, Get, NotFoundException, Param } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { ServiceProvider } from './service-provider-adapter-mongo.schema';

@Controller('oidc-clients')
export class OidcClientController {
  constructor(
    @InjectModel(ServiceProvider.name, 'sandbox')
    private readonly serviceProvider: Model<ServiceProvider>,
  ) {}
  @Get()
  async findAll() {
    return await this.serviceProvider.find().exec();
  }
  @Get('/:key')
  async find_by_id(@Param('key') key: string) {
    const service = await this.serviceProvider.findOne({ key }).exec();
    if (!service) throw new NotFoundException();
    return {
      clientName: service.name,
      clientDescription: service.email,
      clientId: service.entityId,
      clientSecret: service.client_secret,
      scope: service.scopes,
      postLogoutRedirectUris: service.post_logout_redirect_uris,
      redirectUris: service.redirect_uris,
    };
  }
  // @Post()
  // async create(@Body() createOidcClientDto: CreateOidcClientDto) {
  //   try {
  //     return await this.oidcClientSaver.save(createOidcClientDto);
  //   } catch (error) {
  //     throw new HttpException(
  //       {
  //         status: HttpStatus.BAD_REQUEST,
  //         error: `Error occurs : ${error.message}`,
  //       },
  //       HttpStatus.BAD_REQUEST,
  //       {
  //         cause: error,
  //       },
  //     );
  //   }
  // }
}
