import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { OidcClientController } from './oidc-client.controller';
import { OidcClient } from './oidc-client.entity';
import { OidcClientSaver } from './oidc-client.saver';
import { ServiceProvider } from './service-provider-adapter-mongo.schema';

@Module({
  imports: [TypeOrmModule.forFeature([OidcClient, ServiceProvider])],
  controllers: [OidcClientController],
  providers: [OidcClientSaver],
  exports: [OidcClientSaver],
})
export class OidcClientModule {}
