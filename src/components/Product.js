
import React from 'react'
import { ProductConsumer } from '../context'
import styled from 'styled-components'

function Product() {

    return (
        <ProductWrapper className="row">
            <ProductConsumer>
                {( value ) => ( value.children.map( image => (
                    <div className="card col-9 mx-2 col-md-6 col-lg-3 my-3">
                        <div className="card-body">
                            <img key={image.name} src={image.path} alt='T-shirt'/>
                        </div>
                    </div>               
                ) ) )}            
            </ProductConsumer>
        </ProductWrapper>
    )
}

const ProductWrapper = styled.div`
`;

export default Product;