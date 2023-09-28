import { Module } from '@nestjs/common';
import { OidcClientSaver } from './oidc-client.saver';
import { OidcClientController } from './oidc-client.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { OidcClient } from 'src/entities/oidc-client.entity';

@Module({
  imports: [TypeOrmModule.forFeature([OidcClient])],
  controllers: [OidcClientController],
  providers: [OidcClientSaver],
  exports: [OidcClientSaver],
})
export class OidcClientModule {}
