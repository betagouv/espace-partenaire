import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { KeysGenerator } from './keys/KeysGenerator';
import { OidcClientController } from './oidc-client/oidc-client.controller';
import { OidcClientSaver } from './oidc-client/oidc-client.saver';

@Module({
  imports: [],
  controllers: [AppController, OidcClientController],
  providers: [AppService, KeysGenerator, OidcClientSaver],
})
export class AppModule {}
