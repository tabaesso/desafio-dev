import { injectable, inject } from 'tsyringe';

import ITransactionsRepository from '../interfaces/ITransactionsRepository';

import Transaction from '../models/Transaction';

@injectable()
class FindAllTransactionService {
  constructor(
    @inject('TransactionsRepository')
    private transactionsRepository: ITransactionsRepository,
  ) {}

  public async execute(): Promise<Transaction[]> {
    const transactions = await this.transactionsRepository.findAll();

    return transactions;
  }
}

export default FindAllTransactionService;
