import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { OidcClientsService } from './oidc-clients.service';
import { OidcClient } from '../entities/oidc_client.entity';
import { AppController } from 'src/app.controller';

@Module({
  imports: [TypeOrmModule.forFeature([OidcClient])],
  providers: [OidcClientsService],
  controllers: [AppController],
})
export class OidcClientModule {}
