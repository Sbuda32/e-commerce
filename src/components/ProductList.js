import React from 'react';
import '../App.css';
import Product from './Product';

function ProductList() {
  return (
    <React.Fragment>
      <h2>Hello from Products Component</h2>
      <div className="row">
        <Product />
      </div>
    </React.Fragment>
  );
}

export default ProductList;
