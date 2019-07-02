
import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import styled from 'styled-components'
import tshirtObject from '../t-shirts-data'

function Product( props ) {

    const [ value ] = useState( tshirtObject );
    const [ filteredValue, setFilteredValue ] = useState(value.children);

     useEffect( () => {
      
        setFilteredValue( value.children.filter( item => { return item.title.toLowerCase().indexOf( props.searchValue ) !== -1 } ) )
     }, [ props.searchValue, value ] )

     function handleCartClick ( name ) {
         let tempProductsArray = value.children;
         const index = tempProductsArray.indexOf( value.children.find( item => {
             item.name === name
         } ) );
         const product = tempProductsArray[ index ];
         product.isInCart = 
     }

    return (
        
        <ProductWrapper className="row m-5" >
                    {console.log(filteredValue)} 
        {filteredValue.map( image => (
                      
                    <div className="cardContainer col-9 mx-2 col-md-6 col-lg-3 my-3" >
                        <div className="card-body text-center">
                            <Link to={
                                {
                                    pathname: "/Details",
                                    state: {
                                        title: image.title,
                                        path: image.path,
                                        details: image.details,
                                        price: image.price,
                                        isInCart: image.isInCart
                                    }
                                }

                            }>
                                <img className="image" key={image.name} src={image.path} alt='T-shirt'/>
                            </Link>
                        </div> 
                         {(image.isInCart) ? <span className="cart-button inCartLabel" >In cart</span> :
                          <span className="cart-button" onClick={ handleCartClick }> <i className="fas align-items-center fa-cart-arrow-down fa-2x" /></span>}
                        
                        <div className="card-footer d-flex justify-content-between" >
                            <p className="titleLabel" > { image.title } </p>
                            <p className="priceLabel"> { image.price } </p>
                        </div>
                    </div>               
                ) )  }  
        </ProductWrapper>
    )
}
// #e86830 - orange
// #9cf4a7 - some green

const ProductWrapper = styled.div`
    .row {
        position: absolute;
    }
    .card {
        position: relative;
        border: none;
        transition: all 1s ease-in;
    }

    .image {
        overflow: hiddden;
        transition: all 1s linear;
    }

    .card-footer {
        font-family: 'Chakra Petch', sans-serif;
        font-weight: 900;
    }

    .fa-cart-arrow-down:hover {
        color: #e86830;
    }
`;

export default Product;