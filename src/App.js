import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Switch, Route } from 'react-router-dom'
import Products from './components/Products'
import NavBar from './components/NavBar';
import Details from './components/Details';
import Cart from './components/Cart';
import Default from './components/Default';

function App() {
  return (
    <React.Fragment>
      <NavBar />
     <Switch>
        <Route exact path="/" component={Products} />
        <Route path="/details" component={Details} />
        <Route path="/cart" component={Cart} />
        <Route component={Default} />
     </Switch>
    </React.Fragment>
  );
}

export default App;
