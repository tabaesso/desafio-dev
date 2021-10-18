import { injectable, inject } from 'tsyringe';

import ITransactionsRepository from '../interfaces/ITransactionsRepository';

import Transaction from '../models/Transaction';
import ICreateTransactionDTO from '../dtos/ICreateTransactionDTO';

@injectable()
class CreateTransactionService {
  constructor(
    @inject('TransactionsRepository')
    private transactionsRepository: ITransactionsRepository,
  ) {}

  public async execute({
    type,
    date,
    value,
    cpf,
    card,
    hour,
    owner,
    name,
  }: ICreateTransactionDTO): Promise<Transaction> {

    const transaction = await this.transactionsRepository.create({
      type,
      date,
      value,
      cpf,
      card,
      hour,
      owner,
      name,
    });

    return transaction;
  }
}

export default CreateTransactionService;
