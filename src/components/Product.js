
import React, { useState } from 'react';
import { ProductConsumer } from '../context'
import { Link } from "react-router-dom";
import styled from 'styled-components'
import tshirtObject from '../t-shirts-data'

function Product() {

    const [ value, setValue ] = useState( tshirtObject );

     function getValue (id) {
         
         console.log(id + " value " + value.children.findIndex( i =>  i.path === id ));
     }

    return (
        <ProductWrapper className="row m-5">
            <ProductConsumer>
                {( value ) => ( value.children.map( image => (

                    <div className="cardContainer col-9 mx-2 col-md-6 col-lg-3 my-3">
                        <div className="card-body text-center">
                            {console.log(value.children)}
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
                                <img onClick={ () => getValue(image.path)} className="image" key={image.name} src={image.path} alt='T-shirt'/>
                            </Link>
                        </div>
                        
                        { (image.isInCart) ? <span className="cart-button inCartLabel" >In cart</span> :
                          <span className="cart-button" > <i className="fas align-items-center fa-cart-arrow-down fa-2x" /></span>
                        }
                        <div className="card-footer d-flex justify-content-between" >
                            <p className="titleLabel"> { image.title } </p>
                            <p className="priceLabel"> { image.price } </p>
                        </div>
                    </div>               
                ) ) )}            
            </ProductConsumer>
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