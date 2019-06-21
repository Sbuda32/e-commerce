import React from 'react'
// import { useState } from 'react'
// import Tshirts from './t-shirts-data'
const ProductContext = React.createContext();

const ProductProvider = ProductContext.Provider;

const ProductConsumer = ProductContext.Consumer;

export { ProductProvider, ProductConsumer };

