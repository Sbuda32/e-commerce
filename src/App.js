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

function App() {

  const [searchInputValue, setSearchInputValue] = useState("");

  function handleSearch ( value ) {
    setSearchInputValue( value );
    
  }

  return (
    <React.Fragment>
      <NavBar  value={ searchInputValue } setInputValue={ handleSearch } />
      {console.log(searchInputValue)}
     <Switch>
        <Route exact path="/" render={ () => ( <Product searchValue={searchInputValue}/>)  } />
        <Route path="/details" component={Details} />
        <Route path="/cart" component={Cart} />
        <Route component={Default} />
     </Switch>
    </React.Fragment>
  );
}

export default App;
