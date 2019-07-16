import tshirtObject from '../t-shirts-data';

const initState = {

    cartList: [],
    tshirtObject
}

const mainReducer = ( state = initState, action ) => {
    console.log(state);
    
    switch ( action.type ) {

        case "ADD_TO_CART":
            console.log(action);
            
            return {
                ...state,
                cartList: [ ...state.cartList, action.itemObject ]
            };
        
        case "REMOVE_ITEM":
            console.log(action);
            console.log(state.cartList.filter( item => { return item !== action.itemObject } ));
            
            action.itemObject.isInCart = false;
            
            return {
                ...state,
                cartList: state.cartList.filter( item => { return item !== action.itemObject } )
            };

        default:
            return state;
    }
}

export default mainReducer;