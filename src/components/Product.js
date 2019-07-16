import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import styled from 'styled-components'
import tshirtObject from '../t-shirts-data'
import useForceUpdate from 'use-force-update'
import Modal from 'react-awesome-modal'
import { ButtonTag } from './Details'
import { connect } from 'react-redux'
import { addItemToCart } from '../actions/CRUDActions';
 
function Product( props ) {

    const [ value, setValue ] = useState( tshirtObject );
    const [ filteredValue, setFilteredValue ] = useState( value.children );
    const [ modalVisibility, setModalVisibility ] = useState( false );
    let [ index, setIndex] = useState(-1);

    let tempProductsArray = props.productList;

    const forceUpdate = useForceUpdate();

     useEffect( () => {
        
        setFilteredValue( tempProductsArray.children.filter( item => { return item.title.toLowerCase().indexOf( props.searchValue ) !== -1 } ) )
     }, [ props.searchValue, tempProductsArray.children ] );

     useEffect( () => {
         setFilteredValue( value.children )
     }, [ value ] )


     //Function to handle add to cart
     function handleAddToCart ( itemObject ) {

        let currentIndex = tempProductsArray.children.indexOf( value.children.find( item => { return item.title === itemObject.title } ) );
        props.addToCart( itemObject );
        console.log( itemObject );
        
        console.log(tempProductsArray, currentIndex);

         if( index !== -1 ) {

            setIndex( currentIndex );
            
            console.log( tempProductsArray.children.indexOf( value.children.find( item => { return item.title === itemObject.title } ) ) );
            tempProductsArray.children[ currentIndex ].isInCart = true;
            tempProductsArray.children[ currentIndex ].count += 1;
            tempProductsArray.children[ currentIndex ].total += tempProductsArray.children[ currentIndex ].price;
            console.log(tempProductsArray.children[ currentIndex ].isInCart);
            //props.handleAddtoCartArray( tempProductsArray.children[ currentIndex]);
            console.log(props);
         }

         else {

            setIndex( currentIndex );
            console.log(index);
            
            console.log( currentIndex );

             tempProductsArray.children[ currentIndex ].isInCart = true;
             tempProductsArray.children[ currentIndex ].count += 1;
             tempProductsArray.children[ currentIndex ].total += tempProductsArray.children[ currentIndex ].price;
             console.log(tempProductsArray.children[ currentIndex ].isInCart);
            // props.handleAddtoCartArray(tempProductsArray.children[ currentIndex ]);
             console.log(props.productList.children);

             setValue(  tempProductsArray  );
             forceUpdate();
            //console.log( index );
         }
         
        // console.log( filteredValue[ index ].isInCart );
     }

     function handleModalOpen () {
         setModalVisibility( true );
     }

     function handleCloseModal () {
         setModalVisibility( false );
     }

    return (
        
        <ProductWrapper className="row m-5" >
                    {console.log(props.cartList)}
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
                                        isInCart: image.isInCart,
                                        name: image.name,
                                        productObject: image,
                                        temp: tempProductsArray
                                    }
                                }

                            }>
                                <img className="image" key={image.name} src={image.path} alt='T-shirt'/>
                            </Link>
                            {console.log(image.isInCart)}
                        </div> 
                        
                        
                         {(image.isInCart) ? <span className="cart-button inCartLabel" >In cart</span> :
                          <span className="cart-button" onClick={ () => { handleAddToCart( image ); handleModalOpen(); } }> <i className="fas align-items-center fa-cart-arrow-down fa-2x" /></span>}

                        <div className="card-footer d-flex justify-content-between" >
                            <p className="titleLabel" > { image.title } </p>
                            <p className="priceLabel"> $ { image.price }.00 </p>
                        </div>
                    </div>               
                ) )  }  

                <Modal visible={modalVisibility} width="400" height="600" effect="fadeInRight" >
                    <ModalWrapper>
                        <h2 className="p-3 mx-auto">Item Added to Cart</h2>
                        {console.log(index)}
                        { (index === -1) ? <img className="img-fluid pl-5" alt='added product' /> :
                            <div>
                                <img className="img-fluid pl-5" src={ value.children[ index ].path } alt='added product' /> 
                                <h2 className="addedItemTitle text-center pt-1" > { value.children[ index ].title } </h2>
                                <p className="addedItemPrice text-center" > $ { value.children[ index ].price }.00 </p>
                            </div>
                        } 
                        
                        <Link to="/">
                            <ButtonTag className="col-9 p-1 ml-5" onClick={ () => { handleCloseModal() } }> Continue Shopping  </ButtonTag>
                        </Link>
                        <Link to={
                            {
                                pathname: "/cart",
                                state: {
                                    cartList: props.cartList
                                }
                            }
                        }>
                            <ButtonTag cartButton className="col-9 p-1 ml-5"  > Go to Cart  </ButtonTag>
                        </Link>
                    </ModalWrapper>
                </Modal>
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

const ModalWrapper = styled.div `
    img{

        position: relative;
        width: 90%;
    }

    .addedItemTitle {

        font-family: Baloo;
    }

    .addedItemPrice {

        font-family: 'Chakra Petch';
        font-size: 110%;
        font-weight: 800;
    }
`

const mapStateToProps = ( state ) => {

    return {

        cartList: state.cartList,
        productList: state.tshirtObject
    }
}

const mapDispatchToProp = ( dispatch ) => {

    return {

        addToCart: ( item ) => { dispatch( addItemToCart( item ) ) },
        
    }
}

export default connect ( mapStateToProps, mapDispatchToProp ) ( Product );