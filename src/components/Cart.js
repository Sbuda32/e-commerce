import React from 'react';
import { Link } from 'react-router-dom'
import '../App.css';

function Cart() {
  return (
    <React.Fragment>
      <Link to="/">
        <span className=" m-3" > <i class="far fa-hand-point-left fa-3x"></i> </span>
      </Link>
      <h2>Hello from Cart Component</h2>
    </React.Fragment>
  );
}

export default Cart;
