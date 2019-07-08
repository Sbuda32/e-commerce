import React from 'react'
import CartItem from './CartItem';

export default function CartList( props ) {
    return (
        <div className="container-fluid" >
            {
                props.cartList.map( item => {

                  console.log(item.title)
                  return (
                      <CartItem key={item.title} cartItem={item} />
                  )
                  
                } )
                
            }
        </div>
    )
}
