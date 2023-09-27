import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { OidcClient } from '../entities/oidc_client.entity';

@Injectable()
export class OidcClientsService {
  constructor(
    @InjectRepository(OidcClient)
    private readonly OidcClientRepository: Repository<OidcClient>
  ) {}

  createOidcClient(): string {
    return 'create oidc client';
  }

  // findAll(): Promise<OidcClient[]> {
  //   return this.OidcClientRepository.find();
  // }

  // findOne(id: number): Promise<OidcClient | null> {
  //   return this.OidcClientRepository.findOneBy({ id });
  // }

  // async remove(id: number): Promise<void> {
  //   await this.OidcClientRepository.delete(id);
  // }
}
