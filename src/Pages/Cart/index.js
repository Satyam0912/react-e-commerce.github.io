import React from 'react';
import styles from './styles.module.css';
import { useProduct } from '../../Context/ProductContext';
import CartCard from '../../Components/CartCard';

const Cart = () => {

    const { cartItems, setCartItems, cartAmount, setCartAmount } = useProduct();

    const removeFromCart = (e) => {
        let localCartAmount = 0;
        let prevCartItems = cartItems;

        prevCartItems = prevCartItems.filter(item => {
            return item.id != e.id;
        })
        prevCartItems.forEach(item => {
            localCartAmount += item.price;
        });

        setCartAmount(localCartAmount)
        setCartItems(prevCartItems)

    }

    return (
        <div className={styles.cardGroup}>
            <div>
                <h3>Total Items: {cartItems.length}</h3>
                <h3>Total amount: {cartAmount}</h3>
            </div>
            <br />
            {
                cartItems?.map((item, index) => {
                    return (
                        <CartCard key={index} item={item} removeFromCart={() => removeFromCart(item)} />
                    )
                })
            }
        </div>
    )
}

export default Cart