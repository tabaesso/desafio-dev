import React, { useState, useEffect } from 'react';
import _ from 'lodash';

import Header from '../../components/Header';
import api from '../../services/api';

import { Container, TableContainer } from './styles';
import formatValue from '../../utils/formatValue';
import formatCpf from '../../utils/formatCpf';
import formatDate from '../../utils/formatDate';

interface ITransactionDTO {
  type?: number;
  date?: string;
  value?: number;
  cpf?: string;
  card?: string;
  hour?: string;
  owner?: string;
  name?: string;
}

const getTransactionType = (type: number | undefined): string => {
  if (!type) {
    return 'N/A';
  }

  switch (type) {
    case 1:
      return 'Débito';
    case 2:
      return 'Boleto';
    case 3:
      return 'Financiamento';
    case 4:
      return 'Crédito';
    case 5:
      return 'Recebimento Empréstimo';
    case 6:
      return 'Vendas';
    case 7:
      return 'Recebimento TED';
    case 8:
      return 'Recebimento DOC';
    case 9:
      return 'Aluguel';
    default:
      return 'N/A';
  }
}

const Dashboard: React.FC = () => {
  const [transactions, setTransactions] = useState<ITransactionDTO[]>([]);

  useEffect(() => {
    api.get<ITransactionDTO[]>('/transactions').then((response) => {
      setTransactions(response.data);
    });
  }, []);

  return (
    <>
      <Header size="small"/>
      <Container>
        <TableContainer>
          <table>
            <thead>
              <tr>
                <th>Transação</th>
                <th>CPF</th>
                <th>Cartão</th>
                <th>Data</th>
                <th>Hora</th>
                <th>Valor</th>
              </tr>
            </thead>

            <tbody>
              {transactions.map(transaction => (
                <tr>
                  <td>{getTransactionType(transaction.type)}</td>
                  <td>{formatCpf(transaction.cpf || '')}</td>
                  <td>{transaction.card}</td>
                  <td>{formatDate(transaction.date)}</td>
                  <td>{transaction.hour}</td>
                  <td>{formatValue(transaction.value || 0)}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </TableContainer>
      </Container>
    </>
  );
};

export default Dashboard;
