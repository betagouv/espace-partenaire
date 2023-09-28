import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { KeysGenerator } from './keys/KeysGenerator';
import { TypeOrmModule, TypeOrmModuleOptions } from '@nestjs/typeorm';
import { config } from './config';
import { OidcClientModule } from './oidc-client/oidc-client.module';

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
  imports: [TypeOrmModule.forRoot(dataSource), OidcClientModule],
  controllers: [AppController],
  providers: [AppService, KeysGenerator],
})
export class AppModule {}
