import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as cors from 'cors';
import { dataSource } from './dataSource';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  console.log('Initializing database...');
  await dataSource.initialize();
  console.log('Database initialized!');
  const app = await NestFactory.create(AppModule);

  app.useGlobalPipes(new ValidationPipe());

  app.use(cors({ origin: 'http://localhost:3001' }));

  await app.listen(3000, () => {
    console.log('App listening on port 3000');
  });
}
bootstrap();
