import React, { useEffect, useState } from 'react';
import { addToDb, deleteShoppingCart, getShoppingCart } from '../../utilities/fakedb';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import './Shop.css';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight} from '@fortawesome/free-solid-svg-icons'

const Shop = () => {
    const [products, setProducts] = useState([]);
    const [cart, setCart] = useState([])

    useEffect(() => {
        fetch('products.json')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, []);

    useEffect(() => {
        // console.log(products)
        const storedCart = getShoppingCart();
        const savedCart = [];
        //step-1 get id
        for (const id in storedCart) {
            const addedProduct = products.find(product => product.id === id);
            //console.log(savedProduct);
            //step-3 get quantity of the product;
            if (addedProduct) {

                const quantity = storedCart[id];
                addedProduct.quantity = quantity;
                //step-4
                savedCart.push(addedProduct);
            }
            //console.log(addedProduct);
        }
        //step-5
        setCart(savedCart);

    }, [products])

    const handleAddToCart = (product) => {
        const newCart = [...cart, product];
        setCart(newCart);

        addToDb(product.id);
    }

    const handleClearCart = () => {
        setCart([]);
        deleteShoppingCart();
    }

    return (
        <div className='shop-container'>
            <div className='products-container'>

                {
                    products.map(product => <Product product={product} key={product.id} handleAddToCart={handleAddToCart}></Product>)
                }
            </div>
            <div className='cart-container'>
                <Cart cart={cart}
                    handleClearCart={handleClearCart}>
                    <Link className='proceed-link' to="/orders">
                        <button className='btn-proceed'>Review Order <FontAwesomeIcon icon={faArrowRight} /></button>
                    </Link>
                </Cart>
            </div>

        </div>
    );
};

export default Shop;