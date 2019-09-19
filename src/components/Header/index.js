import React from 'react';
import { Link } from 'react-router-dom';

import { GiCoffeeBeans } from 'react-icons/gi';

import { Container, Cart } from './styles';

import logo from '../../assets/logo.svg';

export default function Header() {
  return (
    <Container>
      <Link to="/">
        <img src={logo} alt="React Coffee" />
      </Link>

      <Cart to="/cart">
        <div>
          <strong>Sacola de Cafés</strong>
          <span>3 itens</span>
        </div>
        <GiCoffeeBeans size={36} color="#F6F1EC" />
      </Cart>
    </Container>
  );
}
