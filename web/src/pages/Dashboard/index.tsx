import React from 'react';

import Header from '../../components/Header';

import { Container, TableContainer } from './styles';

const Dashboard: React.FC = () => {
  return (
    <>
      <Header size="small"/>
      <Container>
        <TableContainer>
          <table>
            <thead>
              <tr>
                <th>Título</th>
                <th>Preço</th>
                <th>Categoria</th>
                <th>Data</th>
              </tr>
            </thead>

            <tbody>
              <tr>
                <td className="title">Opa</td>
                <td className="income">Opa</td>
                <td>Opa</td>
                <td>Opa</td>
              </tr>
            </tbody>
          </table>
        </TableContainer>
      </Container>
    </>
  );
};

export default Dashboard;
