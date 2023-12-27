//

import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { OidcClientController } from './oidc-client.controller';
import {
  ServiceProvider,
  ServiceProviderSchema,
} from './service-provider-adapter-mongo.schema';

@Module({
  imports: [
    MongooseModule.forFeature(
      [{ name: ServiceProvider.name, schema: ServiceProviderSchema }],
      'sandbox',
    ),
  ],
  controllers: [OidcClientController],
})
export class OidcClientModule {}
