import { Router } from 'express';
import { celebrate, Segments, Joi } from 'celebrate';

import TransactionsController from '../TransactionsController';

const transactionsRouter = Router();
const transactionsController = new TransactionsController();

transactionsRouter.post(
  '/',
  celebrate({
    [Segments.BODY]: {
      type: Joi.number(),
      date: Joi.date(),
      value: Joi.number(),
      cpf: Joi.string(),
      card: Joi.string(),
      hour: Joi.string(),
      owner: Joi.string(),
      name: Joi.string(),
    },
  }),
  transactionsController.create,
);

transactionsRouter.get(
  '/',
  transactionsController.find,
);

transactionsRouter.get(
  '/:id',
  transactionsController.findById,
);

export default transactionsRouter;
