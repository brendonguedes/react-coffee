import React from 'react';
import {
  MdRemoveCircleOutline,
  MdAddCircleOutline,
  MdDelete,
} from 'react-icons/md';

import { Container, ProductTable, Total } from './style';

export default function Cart() {
  return (
    <Container>
      <ProductTable>
        <thead>
          <tr>
            <th />
            <th>PRODUTO</th>
            <th>QUANTIDADE</th>
            <th>SUBTOTAL</th>
            <th />
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <img
                src="https://f002.backblazeb2.com/file/adolfofonzar/react-coffee_product-demo.jpg"
                alt="Product Demo"
              />
            </td>
            <td>
              <strong>
                Café Orfeu Microlote Bourbon/Arara Torrado em Grãos 250g
              </strong>
              <span>R$56,90</span>
            </td>
            <td>
              <div>
                <button type="button">
                  <MdRemoveCircleOutline size={20} color="#4c423f" />
                </button>
                <input type="number" readOnly value={2} />
                <button type="button">
                  <MdAddCircleOutline size={20} color="#4c423f" />
                </button>
              </div>
            </td>
            <td>
              <strong>R$113,80</strong>
            </td>
            <td>
              <button type="button">
                <MdDelete size={20} color="#4c423f" />
              </button>
            </td>
          </tr>
        </tbody>
      </ProductTable>

      <footer>
        <button type="button">Finalizar pedido</button>

        <Total>
          <span>TOTAL</span>
          <strong>R$1230,60</strong>
        </Total>
      </footer>
    </Container>
  );
}
