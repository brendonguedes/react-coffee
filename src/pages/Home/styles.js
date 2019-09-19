import styled from 'styled-components';
import { darken } from 'polished';

export const ProductList = styled.ul`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 20px;
  list-style: none;

  li {
    display: flex;
    flex-direction: column;
    background: #fff;
    border-radius: 4px;
    padding: 20px;
    transition: box-shadow 0.2s;

    box-shadow: 1px 2px 3px 0px rgba(0, 0, 0, 0.1);
    -webkit-box-shadow: 1px 2px 3px 0px rgba(0, 0, 0, 0.1);
    -moz-box-shadow: 1px 2px 3px 0px rgba(0, 0, 0, 0.1);

    &:hover {
      box-shadow: 1px 2px 3px 0px rgba(0, 0, 0, 0.2);
      -webkit-box-shadow: 1px 2px 3px 0px rgba(0, 0, 0, 0.2);
      -moz-box-shadow: 1px 2px 3px 0px rgba(0, 0, 0, 0.2);
    }
    img {
      align-self: center;
      max-width: 250px;
    }

    > strong {
      font-size: 16px;
      line-height: 20px;
      color: #1e1e1e;
      margin-top: 5px;
    }

    > span {
      font-size: 21px;
      font-weight: bold;
      margin: 5px 0 20px;
    }

    button {
      background: #4c423f;
      color: #f6f1ec;
      border: 0;
      border-radius: 4px;
      overflow: hidden;
      margin-top: auto;

      display: flex;
      align-items: center;
      transition: background 0.2s;

      &:hover {
        background: ${darken(0.05, '#4c423f')};
      }

      div {
        display: flex;
        align-items: center;
        padding: 12px;
        background: rgba(0, 0, 0, 0.3);

        svg {
          margin-right: 5px;
        }
      }

      span {
        flex: 1;
        text-align: center;
        font-weight: bold;
      }
    }
  }
`;
