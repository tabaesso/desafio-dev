import Transaction from '../models/Transaction';
import ICreateTransactionDTO from '../dtos/ICreateTransactionDTO';

export default interface ITransactionsRepository {
  findAll(): Promise<Transaction[]>;
  findById(id: string): Promise<Transaction | undefined>;
  create(data: ICreateTransactionDTO): Promise<Transaction>;
  save(data: Transaction): Promise<Transaction>;
}
