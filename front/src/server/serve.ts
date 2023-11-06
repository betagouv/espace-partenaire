import express from 'express';
import path from 'path';
import dotenv from 'dotenv';
import { URL } from 'url';

dotenv.config();

const __dirname = new URL('.', import.meta.url).pathname;

function serve() {
  const app = express();

  app.use(express.static(path.join(__dirname, '..', 'dist')));

  app.get('/*', (req, res) => {
    res.sendFile(path.join(__dirname, '..', 'dist', 'index.html'));
  });

  app.listen(process.env.PORT, () => {
    console.log('Listening on port ', process.env.PORT);
  });
}

serve();
