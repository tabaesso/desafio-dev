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

  public async execute(fileContent: ICreateTransactionDTO[]): Promise<Transaction[]> {

    const transactionsPromise = fileContent.map((file) => this.transactionsRepository.create({
      type: file.type,
      date: file.date,
      value: file.value,
      cpf: file.cpf,
      card: file.card,
      hour: file.hour,
      owner: file.owner,
      name: file.name,
    }));

    const transactions = await Promise.all(transactionsPromise);

    return transactions;
  }
}

export default CreateTransactionService;
