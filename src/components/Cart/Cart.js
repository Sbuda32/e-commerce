import React from 'react';
import { Link } from 'react-router-dom'
import '../../App.css';
import CartColumn from './CartColumn';
import CartList from './CartList';
import { connect } from 'react-redux';

function Cart( props ) {
  return (
    <React.Fragment>
      <CartColumn />
        {console.log( props.cartList )}
      <CartList cartList={ props.cartList } removeItem={ props.removeItem } />
 
      <Link to="/">
        <span className=" m-3" > <i className="far fa-hand-point-left fa-3x"></i> </span>
      </Link>
      <button className="simpleCart_checkout" > Checkout </button>
    </React.Fragment>
  );
}

const mapStateToProps = ( state ) => {

  return {

    cartList: state.cartList
  }
}

export default connect ( mapStateToProps) ( Cart );
