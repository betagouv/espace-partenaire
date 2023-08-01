import * as dotenv from 'dotenv';

dotenv.config();

const config = {
  DATABASE_NAME: process.env.DATABASE_NAME || '',
  DATABASE_USERNAME: process.env.DATABASE_USER || '',
  DATABASE_PASSWORD: process.env.DATABASE_PASSWORD || '',
  DATABASE_HOST: process.env.DATABASE_HOST || '',
  DATABASE_PORT: process.env.DATABASE_PORT
    ? Number(process.env.DATABASE_PORT)
    : 5432,
};

export { config };
