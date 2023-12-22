import { Module } from '@nestjs/common';
import { ServeStaticModule } from '@nestjs/serve-static';
import { TypeOrmModule, TypeOrmModuleOptions } from '@nestjs/typeorm';
import { join } from 'path';
import { AppController } from './app.controller';
import { config } from './config';
import { KeysGenerator } from './keys/keys-generator';
import { KeysModule } from './keys/keys.module';
import { OidcClientModule } from './oidc-client/oidc-client.module';
import { ServiceProvider } from './oidc-client/service-provider-adapter-mongo.schema';

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

const dataSource_2: TypeOrmModuleOptions = {
  type: 'mongodb',
  url: config.MONGODB_CONNECTION_STRING,
  database: config.MONGODB_DATABASE,
  entities: [ServiceProvider],
  autoLoadEntities: true,
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
