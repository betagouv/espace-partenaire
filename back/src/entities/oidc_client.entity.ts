import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
} from 'typeorm';
import { Oidc_group } from './oidc_group.entity';

@Entity()
export class Oidc_client {
  @PrimaryGeneratedColumn('uuid')
  id: number;

  @Column({ length: 500, unique: true })
  clientDescription: string | null;

  @CreateDateColumn({
    type: 'timestamp',
    default: () => 'CURRENT_TIMESTAMP(6)',
  })
  public created_at: Date;

  @UpdateDateColumn({
    type: 'timestamp',
    default: () => 'CURRENT_TIMESTAMP(6)',
    onUpdate: 'CURRENT_TIMESTAMP(6)',
  })
  public updated_at: Date;

  @Column()
  client_name: string;

  @Column()
  client_id: string;

  @Column()
  client_secret: string;

  @Column()
  redirect_uris: string[];

  @Column()
  post_logout_redirect_uris: string[];

  @Column()
  scope: string[];

  @Column()
  client_uri: string | null;

  @Column()
  userinfo_signed_response_alg: string;

  @Column()
  id_token_signed_response_alg: string;

  @Column()
  authorization_signed_response_alg: string;

  @Column()
  introspection_signed_response_alg: string;

  @Column()
  oidc_group: Oidc_group;
}
