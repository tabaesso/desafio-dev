import { injectable, inject } from 'tsyringe';

import ITransactionsRepository from '../interfaces/ITransactionsRepository';

import Transaction from '../models/Transaction';

@injectable()
class FindByIdTransactionService {
  constructor(
    @inject('TransactionsRepository')
    private transactionsRepository: ITransactionsRepository,
  ) {}

  public async execute(id: string): Promise<Transaction | undefined> {
    const transaction = await this.transactionsRepository.findById(id);

    if (!transaction) {
      throw new Error('Transaction not found');
    }

    return transaction;
  }
}

export default FindByIdTransactionService;
