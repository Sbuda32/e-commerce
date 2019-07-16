import React, { useState } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import  "./globalStyle.css";
import './fontawesome-free-5.9.0-web/css/all.css';
import { Switch, Route } from 'react-router-dom'
import Product from './components/Product'
import NavBar from './components/NavBar';
import Details from './components/Details';
import Cart from './components/Cart';
import Default from './components/Default';
import useForceUpdate from 'use-force-update'
import { connect } from 'react-redux'
import { addItemToCart, removeItemInCart } from './actions/CRUDActions';

function App( props ) {

  const [searchInputValue, setSearchInputValue] = useState("");
  const [ cart, setCart] = useState(props);

  const forceUpdate = useForceUpdate();

  function handleSearch ( value ) {
    setSearchInputValue( value );
    
  }

  function removeItem( itemObject ) {

    console.log(itemObject, props);
    
    props.deleteItemInCart( itemObject );

    //props.isInCart = false;
    //props.count = 0;

    setCart(cart );
    console.log( "After remove: " + cart );
    forceUpdate();
    
    //props.cartList.slice( index , 1) ;
    //console.log( props.cartList );
}

  return (
    <React.Fragment>
      <NavBar  value={ searchInputValue } setInputValue={ handleSearch } />
      {console.log(searchInputValue)}
     <Switch>
        <Route exact path="/" render={ (props) => ( <Product { ...props } cart={cart} searchValue={searchInputValue} />)  } />
        <Route path="/details" render={ (props) => ( <Details { ...props } cart={cart} /> ) } />
        <Route path="/cart" render={ (props) => ( <Cart { ...props } cart={cart} removeItem={ removeItem } /> ) } />
        <Route component={Default} />
     </Switch>
    </React.Fragment>
  );
}

const mapStateToProps = ( state ) => {

    return {
      cartList: state.cartList,
      productList: state.productList
    }
}

const mapDispatchToProps = ( dispatch ) => {

  return {

    addToCart: ( item ) => { dispatch( addItemToCart( item )) },
    deleteItemInCart: ( item ) => { dispatch( removeItemInCart( item ) ) }
  }
}

export default connect( mapStateToProps, mapDispatchToProps ) ( App );
