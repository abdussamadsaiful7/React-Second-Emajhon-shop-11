import React from 'react';
import './Cart.css';

const Cart = (props) => {
    const {cart} = props;

    let totalShipping = 0;
    let totalPrice = 0;
    for(const product of cart){
        totalPrice = totalPrice + product.price;
        totalShipping = totalShipping + product.shipping;
    }

    const tax = totalPrice*3/100;

    const grandTotal = totalPrice + totalShipping + tax;
    return (
        <div className='cart'>
            <h2 style={{fontSize: '21px'}}>Order Summary</h2>
            <p>Selected Items: {cart.length}</p>
            <p>Total price: $ {totalPrice.toFixed(2)} </p>
            <p>Shipping:$ {totalShipping.toFixed(2)}</p>
            <p>Tax(3%): $ {tax.toFixed(2)}</p>
            <h3 style={{fontSize:'16px'}}>Grand Total:$ {grandTotal.toFixed(2)} </h3>
        </div>
    );
};

export default Cart;