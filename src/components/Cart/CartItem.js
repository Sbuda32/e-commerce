import React from 'react'

export default function CartItem( props ) {
    return (
        <div>
            {console.log( props.cartItem.title )}
            {props.cartItem.title}
        </div>
    )
}
