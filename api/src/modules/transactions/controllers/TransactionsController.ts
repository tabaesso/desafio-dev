import { Request, Response } from 'express';
import { container } from 'tsyringe';
import { classToClass } from 'class-transformer';

import CreateTransactionService from '@modules/transactions/services/CreateTransactionService';

export default class TransactionsController {
  public async create(request: Request, response: Response): Promise<Response> {
    const {
      type,
      date,
      value,
      cpf,
      card,
      hour,
      owner,
      name,
    } = request.body;

    const createTransaction = container.resolve(CreateTransactionService);
    const transaction = await createTransaction.execute({
      type,
      date,
      value,
      cpf,
      card,
      hour,
      owner,
      name,
    });

    return response.json(classToClass(transaction));
  }
}
