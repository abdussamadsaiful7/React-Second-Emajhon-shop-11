import React from 'react';
import './Cart.css';

const Cart = (props) => {
    const {cart} = props;

    let quantity = 0;
    let totalShipping = 0;
    let totalPrice = 0;
    for(const product of cart){
        //option-1
        if(product.quantity === 0){
            product.quantity = 1;
        }
        //option -2
        //product.quantity = product.quantity || 1;
        totalPrice = totalPrice + product.price *product.quantity;
        totalShipping = totalShipping + product.shipping;
        quantity = quantity + product.quantity;
    }

    const tax = totalPrice*3/100;

    const grandTotal = totalPrice + totalShipping + tax;
    return (
        <div className='cart'>
            <h2 style={{fontSize: '21px'}}>Order Summary</h2>
            <p>Selected Items: {quantity}</p>
            <p>Total price: $ {totalPrice.toFixed(2)} </p>
            <p>Shipping:$ {totalShipping.toFixed(2)}</p>
            <p>Tax(3%): $ {tax.toFixed(2)}</p>
            <h3 style={{fontSize:'16px'}}>Grand Total:$ {grandTotal.toFixed(2)} </h3>
        </div>
    );
};

export default Cart;