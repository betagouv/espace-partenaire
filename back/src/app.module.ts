import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { KeysGenerator } from './keys/keys-generator';
import { TypeOrmModule, TypeOrmModuleOptions } from '@nestjs/typeorm';
import { config } from './config';
import { OidcClientModule } from './oidc-client/oidc-client.module';
import { KeysModule } from './keys/keys.module';

const dataSource: TypeOrmModuleOptions = {
  type: 'postgres',
  host: config.DATABASE_HOST,
  port: config.DATABASE_PORT,
  username: config.DATABASE_USERNAME,
  password: config.DATABASE_PASSWORD,
  database: config.DATABASE_NAME,
  entities: [__dirname + '/**/*.entity{.ts,.js}'],
  synchronize: config.DATA_SYNCHRONIZE,
};

@Module({
  imports: [TypeOrmModule.forRoot(dataSource), OidcClientModule, KeysModule],
  controllers: [AppController],
  providers: [KeysGenerator],
})
export class AppModule {}
