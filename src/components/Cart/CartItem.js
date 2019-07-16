import React, { useState } from 'react'
import styled from 'styled-components';
import { connect } from 'react-redux';

function CartItem( props ) {

    const [ count, setCount] = useState( props.cartItem.count );
    const [ total, setTotal] = useState( props.cartItem.total )

    function incrementQuantity( price ) {

        if( count >= 0 ) {

            setCount( count + 1 );
            setTotal( total + price );
        }
    }

    function decrementQuantity( price ) {

        if( count > 0 ) {

            setCount( count - 1 );
            setTotal( total - price );
        }
    }

    //  function removeItem( itemTitle ) {

    //      console.log( itemTitle );
    //      console.log(props.cart.removeItem());
         
    // //     const index = props.cart.cartList.findIndex( item => item.title === itemTitle );
    // //     props.cart.cartList.slice( index , 1) ;

    // //     console.log( props.cart.cartList );
        
    //  }

    return (
        <div className="row text-center" >
            <img className="col-lg-2 p-3" src={props.cartItem.path} alt="Product" style={  {width: "120px", height: "30%"} } />
            {console.log(props)}
            <p className="col-lg-2 d-flex align-items-center justify-content-center" > { props.cartItem.title } </p>
            <p className="col-lg-2 d-flex justify-content-start align-items-center" > $  { props.cartItem.price }.00 </p>
            <QuantityWrapper className="d-flex justify-content-between align-items-center col-lg-2" >
                <button className="box-button" onClick={ () => { decrementQuantity( props.cartItem.price ); } } > - </button>
                <button className="box-button"> { count } </button>
                <button className="box-button" onClick={ () => { incrementQuantity( props.cartItem.price ); } } > + </button>
            </QuantityWrapper>
            <div className="col-lg-2 d-flex align-items-center justify-content-center">
                <i className="fas fa-trash-alt fa-2x" onClick={ () => { props.cart.removeItem( props.cartItem ) } } />
            </div>
            <p className="col-lg-2 d-flex justify-content-start align-items-center" > $  { total }.00 </p>
        </div>
    )
}

const QuantityWrapper = styled.div `
    
    & {
        margin-left: -40px;
    }
    .box-button {

        border: 1px solid #9cf4a7;
        width: 40px;
        height: 40px;
        font-size: x-large;
        background-color: transparent;
        color: #e86830
    }

    .box-button:hover {

        border: 1px solid #9cf4a7;
        width: 40px;
        height: 40px;
        font-size: x-large;
        background-color: #e86830;
        color: #9cf4a7
    }
`;

const mapStateToProps = ( state ) => {

    return {

        cartList: state.cartList
    }
}

export default connect ( mapStateToProps )( CartItem )