import 'reflect-metadata';
import 'dotenv/config';

import express, { Request, Response, NextFunction } from 'express';
import cors from 'cors';
import { errors } from 'celebrate';
import 'express-async-errors';

import routes from './routes';

import '@shared/database';

import '@shared/container';

const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);

app.use(errors());

app.use((err: any, request: Request, response: Response, _: NextFunction) => {
  console.error(err);

  return response.status(err.statusCode || 500).json({
    status: 'error',
    message: err.message,
  });
});

app.listen(process.env.APP_PORT || 3333, () => {
  console.log('✨ Back tá on');
});
