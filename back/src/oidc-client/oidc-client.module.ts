import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { OidcClientSaver } from './oidc-client.saver';
import { OidcClientController } from './oidc-client.controller';
import { OidcClient } from './oidc-client.entity';

@Module({
  imports: [TypeOrmModule.forFeature([OidcClient])],
  controllers: [OidcClientController],
  providers: [OidcClientSaver],
  exports: [OidcClientSaver],
})
export class OidcClientModule {}
