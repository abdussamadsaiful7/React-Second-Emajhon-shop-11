import React from 'react';
import './Product.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'

const Product = (props) => {
    const handleAddToCart = props.handleAddToCart;

    //console.log(props.product)
    const { img, name, price, ratings, seller } = props.product;
    return (
        <div className='product'>
            <div className='single-product'>
                <img className='img' src={img} />
                <div>
                    <h3 className='title'>{name}</h3>
                </div>
                <p>Price: $ {price}</p>
                <p>Rating: {ratings} Stars</p>
                <p>Manufacture: {seller}</p>
            </div>
            <button onClick={() => handleAddToCart(props.product)} className='btn-cart'>Add to Cart  <FontAwesomeIcon icon={faShoppingCart}/></button>
        </div>
    );
};

export default Product;