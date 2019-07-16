import React from 'react';
import styled from 'styled-components'
import { Link } from "react-router-dom";
import '../App.css';
import { addItemToCart } from '../actions/CRUDActions';
import { connect } from 'react-redux';

const Detials = (props) => {
  
  console.log(props.location.state);

  console.log( props.cartList );

  function handleAddToCart ( productObject, productTitle ) {

    const index = props.location.state.temp.children.findIndex( item => { return item.title === productTitle })

   // props.handleAddtoCartArray( productObject );
    console.log(props, productObject);
    
    props.addToCart( productObject )
    props.location.state.temp.children[ index ].isInCart = true;
    props.location.state.temp.children[ index ].count += 1;
    props.location.state.temp.children[ index ].total += props.location.state.temp.children[ index ].price;
    
    props.location.state.isInCart = true;
  }

  return (
    <ContainerTag className="container mt-5">
      <p className="h1 title text-center m-5 mt-8"> {props.location.state.title} </p>
      <div className="middleContainer d-flex">
        <img className="productImage" src={ props.location.state.path } alt="Product" />
        <div className="labelContainer d-flex justify-content-between">
          <p className="priceLabel mt-4"> Price - { props.location.state.price } </p> <p className="ratingLabel mt-4" > Rating </p>
          
        </div>
        <div className="detailSection" > 
          <span className="detailTitle">
            Detials
          </span>
          <p className="detailText" > {props.location.state.details} </p>
          { ( props.location.state.isInCart ) ? <ButtonTag cartButton> In Cart </ButtonTag> :
              <ButtonTag cartButton onClick={ () => { handleAddToCart( props.location.state.productObject, props.location.state.title ); } } > Add to Cart </ButtonTag>
          }
          <Link to="/" >
            <ButtonTag> Back to Products </ButtonTag>
          </Link>
        </div>
      </div>
    </ContainerTag>
)};

const ContainerTag = styled.div`
  
  .productImage {
      
    width: 210px;
    height: 200px;
    margin-top: 10%;
    margin-left: 18%;
    border-radius: 10px;
  }
  .detailSection {
    
    position: relative;
    margin-top: 60px;
    margin-left: -193px;
    z-index: 1;
  }
  .detailText {
    position: relative;
    width: 350px;
    font-family: Chakra;
    color: #e86830;
  }
  .labelContainer {

    position: relative;
    width: 194px;
    margin-left: 90px;
    font-family: Gugi;
    color: #e86830;
  }
  .middleContainer {

    margin-top: -35px;
    min-height: 380px;
  }
  .detailTitle {
    font-family: Baloo;
    color: #9cf4a7;
    font-size: 25px;
  }
}`;

export const ButtonTag = styled.button`
  border: none;
  font-family: Baloo;
  margin: 10px;
  margin-left: 0px;
  padding: 8px 20px;
  border-radius: 100px;
  font-size: 20px;
  outline: none;
  background-color: ${ props => ( props.cartButton ? "#e86830": "#9cf4a7")};
  color: ${ props => ( props.cartButton ? "#9cf4a7": "#e86830")};
  &:hover {
    
    background-color: transparent;
    color: #9cf4a7;
    outline: none;
    border: none;
  }
`;

const mapStateToProps = ( state ) => {

  return {

    cartList: state.cartList
  }
}

const mapDispatchToProps = ( dispatch ) => {

  return {
    
    addToCart: ( item ) => { dispatch( addItemToCart( item ) ) }
  }
}

export default connect ( mapStateToProps, mapDispatchToProps ) ( Detials );
