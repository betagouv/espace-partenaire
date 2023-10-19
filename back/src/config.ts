import * as dotenv from 'dotenv';
import pgConnectionString from 'pg-connection-string';

dotenv.config();

const databaseConfig: Record<string, string> = {};

if (process.env.DATABASE_URL) {
  const infos = pgConnectionString.parse(process.env.DATABASE_URL);
  databaseConfig.DATABASE_NAME = infos.database;
  databaseConfig.DATABASE_USERNAME = infos.user;
  databaseConfig.DATABASE_PASSWORD = infos.password;
  databaseConfig.DATABASE_HOST = infos.host;
  databaseConfig.DATABASE_PORT = infos.port;
}

const config = {
  DATABASE_NAME: process.env.DATABASE_NAME || '',
  DATABASE_USERNAME: process.env.DATABASE_USER || '',
  DATABASE_PASSWORD: process.env.DATABASE_PASSWORD || '',
  DATABASE_HOST: process.env.DATABASE_HOST || '',
  DATABASE_PORT: process.env.DATABASE_PORT
    ? Number(process.env.DATABASE_PORT)
    : 5432,
  DATA_SYNCHRONIZE: process.env.DATA_SYNCHRONIZE
    ? Boolean(process.env.DATA_SYNCHRONIZE)
    : false,
  ...databaseConfig,
};

export { config };
