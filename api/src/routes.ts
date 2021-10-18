import { Router } from 'express';
import transactionsRouter from '@modules/transactions/controllers/routes/transactions.routes';

const routes = Router();

routes.use('/transactions', transactionsRouter);

routes.get('/health', (_req, res) => {
  res.json({ status: 'OK' });
});

routes.get('*', (_req, res) => {
  res.status(404).json({ message: 'Not found' });
});

export default routes;
