import { DataSource } from 'typeorm';
import { config } from './config';

const dataSource = new DataSource({
  type: 'postgres',
  host: config.DATABASE_HOST,
  port: config.DATABASE_PORT,
  username: config.DATABASE_USERNAME,
  password: config.DATABASE_PASSWORD,
  database: config.DATABASE_NAME,
});

export { dataSource };
