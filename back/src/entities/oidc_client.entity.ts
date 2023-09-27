import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
  ManyToMany,
  JoinTable,
} from 'typeorm';
import { Oidc_group } from './oidc_group.entity';

@Entity()
export class OidcClient {
  @PrimaryGeneratedColumn('uuid')
  id: number;

  @Column({ length: 500, nullable: true })
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

  @Column({ nullable: false })
  client_name: string;

  @Column({ unique: true, nullable: false })
  client_id: string;

  @Column({ nullable: false })
  client_secret: string;

  @Column('simple-array')
  redirect_uris: string[];

  @Column('simple-array')
  post_logout_redirect_uris: string[];

  @Column('simple-array')
  scope: string[];

  @Column({ nullable: true })
  client_uri: string | null;

  @Column({ nullable: true })
  userinfo_signed_response_alg: string | null;

  @Column({ nullable: true })
  id_token_signed_response_alg: string | null;

  @Column({ nullable: true })
  authorization_signed_response_alg: string | null;

  @Column({ nullable: true })
  introspection_signed_response_alg: string | null;

  @ManyToMany(() => Oidc_group)
  @JoinTable()
  oidc_group: Oidc_group;
}
