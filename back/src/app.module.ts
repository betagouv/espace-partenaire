//

import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ServeStaticModule } from '@nestjs/serve-static';
import { join } from 'path';
import { AppController } from './app.controller';
import { config } from './config';
import { KeysGenerator } from './keys/keys-generator';
import { OidcClientModule } from './oidc-client/oidc-client.module';

//

@Module({
  imports: [
    MongooseModule.forRoot(config.MONGODB_SANDBOX_CONNECTION_STRING, {
      connectionName: 'sandbox',
      tls: true,
      tlsAllowInvalidHostnames: false,
      tlsCAFile: '/etc/ssl/certs/ca-certificates.crt',
    }),
    OidcClientModule,
    ServeStaticModule.forRoot({
      rootPath: join(__dirname, '../..', 'front/dist'),
    }),
  ],
  controllers: [AppController],
  providers: [KeysGenerator],
})
export class AppModule {}
