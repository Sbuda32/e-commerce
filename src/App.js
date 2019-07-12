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

function App() {

  const [searchInputValue, setSearchInputValue] = useState("");
  const [ cart, setCart] = useState([]);

  const forceUpdate = useForceUpdate();

  function handleSearch ( value ) {
    setSearchInputValue( value );
    
  }

  function handleAddtoCartArray ( value ) {

    setCart( [ ...cart, value ] );
  }

  function removeItem( title ) {

    console.log(title, cart.filter( item => item.title !== title ) );
    
    setCart(cart.filter( item => item.title !== title ) );
    console.log( "After remove: " + cart.filter( item => item.title === title ) );
    forceUpdate();
    
    //props.cartList.slice( index , 1) ;
    //console.log( props.cartList );
}

  return (
    <React.Fragment>
      <NavBar  value={ searchInputValue } setInputValue={ handleSearch } />
      {console.log(searchInputValue)}
     <Switch>
        <Route exact path="/" render={ (props) => ( <Product { ...props } cart={cart} searchValue={searchInputValue} handleAddtoCartArray={ handleAddtoCartArray } />)  } />
        <Route path="/details" render={ (props) => ( <Details { ...props } cart={cart} handleAddtoCartArray={ handleAddtoCartArray } /> ) } />
        <Route path="/cart" render={ (props) => ( <Cart { ...props } cart={cart} handleAddtoCartArray={ handleAddtoCartArray } removeItem={ removeItem } /> ) } />
        <Route component={Default} />
     </Switch>
    </React.Fragment>
  );
}

export default App;
