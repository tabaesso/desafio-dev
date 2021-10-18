import { getRepository, Repository } from 'typeorm';

import ITransactionsRepository from '../interfaces/ITransactionsRepository';
import ICreateTransactionDTO from '../dtos/ICreateTransactionDTO';

import Transaction from '../models/Transaction';

class TransactionsRepository implements ITransactionsRepository {
  private ormRepository: Repository<Transaction>;

  constructor() {
    this.ormRepository = getRepository(Transaction);
  }

  public async findById(id: string): Promise<Transaction | undefined> {
    const transaction = await this.ormRepository.findOne(id);

    return transaction;
  }

  public async findAll(): Promise<Transaction[]> {
    const transactions = await this.ormRepository.find();

    return transactions;
  }

  public async create(transactionData: ICreateTransactionDTO): Promise<Transaction> {
    const transaction = this.ormRepository.create(transactionData);

    await this.ormRepository.save(transaction);

    return transaction;
  }

  public async save(transaction: Transaction): Promise<Transaction> {
    return this.ormRepository.save(transaction);
  }
}

export default TransactionsRepository;
