import React from 'react'

export default function CartColumn() {
    return (
            <div className="container-fluid mt-5">
                <div className="row d-flex" style={ {fontFamily: "Baloo"} }>
                    <p className="col-lg-2 " >Product</p>
                    <p className="col-lg-2 " >Name of Product</p>
                    <p className="col-lg-2 " >Price</p>
                    <p className="col-lg-2 " >Quantity</p>
                    <p className="col-lg-2 " >Remove</p>
                    <p className="col-lg-2 " >Total</p>
                </div>
            </div>
    )
}
