import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ExpressAdapter } from '@nestjs/platform-express';
import * as express from 'express';
import * as cors from 'cors';
import * as path from 'path';
import { dataSource } from './dataSource';
import { config } from './config';

async function bootstrap() {
  console.log('Initializing database...');
  await dataSource.initialize();
  console.log('Database initialized!');
  const server = express();
  const app = await NestFactory.create(AppModule, new ExpressAdapter(server));

  app.use(express.static(path.join(__dirname, '..', 'front', 'build')));

  app.use(cors({ origin: 'http://localhost:3001' }));

  await app.listen(config.PORT, () => {
    console.log(`App listening on port ${config.PORT}`);
  });
}
bootstrap();
