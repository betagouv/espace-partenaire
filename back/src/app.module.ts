import { Module } from '@nestjs/common';
import { ServeStaticModule } from '@nestjs/serve-static';
import { TypeOrmModule, TypeOrmModuleOptions } from '@nestjs/typeorm';
import { join } from 'path';
import { AppController } from './app.controller';
import { config } from './config';
import { KeysGenerator } from './keys/keys-generator';
import { KeysModule } from './keys/keys.module';
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
  imports: [
    TypeOrmModule.forRoot(dataSource),
    OidcClientModule,
    KeysModule,
    ServeStaticModule.forRoot({
      rootPath: join(__dirname, '../..', 'front/dist'),
    }),
  ],
  controllers: [AppController],
  providers: [KeysGenerator],
})
export class AppModule {}
