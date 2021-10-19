import { Request, Response } from 'express';
import { container } from 'tsyringe';
import { classToClass } from 'class-transformer';

import CreateTransactionService from '@modules/transactions/services/CreateTransactionService';
import FindAllTransactionService from '@modules/transactions/services/FindAllTransactionService';
import FindByIdTransactionService from '@modules/transactions/services/FindByIdTransactionService';
export default class TransactionsController {
  public async create(request: Request, response: Response): Promise<Response> {
    const fileContent = request.body;

    const createTransaction = container.resolve(CreateTransactionService);
    const transactions = await createTransaction.execute(fileContent);

    return response.json(classToClass(transactions));
  }

  public async find(request: Request, response: Response): Promise<Response> {
    const findTransactions = container.resolve(FindAllTransactionService);
    const transactions = await findTransactions.execute();

    return response.json(classToClass(transactions));
  }

  public async findById(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;

    const findByIdTransaction = container.resolve(FindByIdTransactionService);
    const transactions = await findByIdTransaction.execute(id);

    return response.json(classToClass(transactions));
  }
}
