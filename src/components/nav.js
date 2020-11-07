import React from 'react';
import { Link } from 'gatsby';

export default function Nav() {
  return (
    <div>
      <nav>
        <ul>
          <li>
            <Link to="beers">Beers</Link>
          </li>
          <li>
            <Link to="order">Order</Link>
          </li>
          <li>
            <Link to="pizzas">Pizzas</Link>
          </li>
          <li>
            <Link to="slicemasters">SliceMasters</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}
