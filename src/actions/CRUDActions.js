export const addItemToCart = ( itemObject ) => {

    return {

       type: "ADD_TO_CART",
       itemObject
   }
}

export const removeItemInCart = ( itemObject ) => {

    return {

        type: "REMOVE_ITEM",
        itemObject
    }
}