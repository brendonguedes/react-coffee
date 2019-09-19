import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Container = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 30px 0;

  img:hover {
    transition: opacity 0.2s;
    opacity: 0.7;
  }
`;

export const Cart = styled(Link)`
  display: flex;
  align-items: center;
  text-decoration: none;
  transition: opacity 0.2s;

  &:hover {
    opacity: 0.7;
  }

  div {
    text-align: right;
    margin-right: 10px;

    strong {
      display: block;
      color: #f6f1ec;
    }
    span {
      font-size: 12px;
      color: #f2f2f2;
    }
  }
`;
