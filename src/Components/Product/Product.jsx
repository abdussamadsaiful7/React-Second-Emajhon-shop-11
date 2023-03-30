import React from 'react';
import './Product.css';

const Product = (props) => {
    console.log(props.product)
    const {img, name, price, ratings, seller} = props.product;
    return (
        <div className='single-product'>
           <img className='img' src={img}/>
           <h3>{name}</h3>
           <p>Price: $ {price}</p>
           <p>Rating: {ratings} Stars</p>
           <p>Manufacture: {seller}</p>

        </div>
    );
};

export default Product;