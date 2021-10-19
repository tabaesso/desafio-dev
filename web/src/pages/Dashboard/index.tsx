import React, { useState, useEffect, useMemo } from 'react';
import _ from 'lodash';

import Header from '../../components/Header';
import api from '../../services/api';

import { Container, TableContainer, CardContainer, Card } from './styles';
import formatValue from '../../utils/formatValue';
import formatCpf from '../../utils/formatCpf';
import formatDate from '../../utils/formatDate';

import total from '../../assets/total.svg';

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

  const totalValue = useMemo(() => {
    let total = 0;

    transactions.forEach((transaction) => {
      if (transaction.type === 2 || transaction.type === 3 || transaction.type === 9) {
        total = total - Number(transaction.value);
      } else {
        total = total + Number(transaction.value);
      }
    });

    return total;
  }, [transactions]);

  return (
    <>
      <Header/>
      <Container>
        <CardContainer>
          <Card>
            <header>
              <p>Total</p>
              <img src={total} alt="Total" />
            </header>
            <h1>{formatValue(totalValue)}</h1>
          </Card>
        </CardContainer>

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
