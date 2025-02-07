import React from 'react';

import { Link } from 'react-router-dom';

import { Container, Home } from './styles';

interface HeaderProps {
  size?: 'small' | 'large';
}

const Header: React.FC<HeaderProps> = ({ size = 'large' }: HeaderProps) => (
  <Container size={size}>
    <header>
      <Home to="/">desafio-dev</Home>
      <nav>
        <Link to="/import">Importar</Link>
      </nav>
    </header>
  </Container>
);

export default Header;
