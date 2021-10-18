import { Router } from 'express';
// import usersRouter from '@modules/users/controllers/routes/users.routes';

const routes = Router();

// routes.use('/transactions', usersRouter);

routes.get('/health', (_req, res) => {
  res.json({ status: 'OK' });
});

routes.get('*', (_req, res) => {
  res.status(404).json({ message: 'Not found' });
});

export default routes;
