import { container } from 'tsyringe';

import ITransactionsRepository from '@modules/transactions/interfaces/ITransactionsRepository';
import TransactionsRepository from '@modules/transactions/repositories/TransactionsRepository';

container.registerSingleton<ITransactionsRepository>(
  'TransactionsRepository',
  TransactionsRepository,
);
