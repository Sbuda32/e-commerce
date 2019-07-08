import React from 'react';
import { Link } from 'react-router-dom'
import '../../App.css';
import CartColumn from './CartColumn';
import CartList from './CartList';

function Cart( props ) {
  return (
    <React.Fragment>
      <CartColumn />
        {console.log( props.location.state )}
      <CartList cartList={ props.location.state.cartList } />

      <Link to="/">
        <span className=" m-3" > <i className="far fa-hand-point-left fa-3x"></i> </span>
      </Link>
    </React.Fragment>
  );
}

export default Cart;
