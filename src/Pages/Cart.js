import React from 'react';
import { useProduct } from '../Context/ProductContext';
import CardComponent from '../Components/CardComponent/CardComponent';

const Cart = () => {

    const { cartItems, cartAmount } = useProduct();

    return (
        <div className='Cart'>
            <div className='d-flex justify-content-evenly'>
                <h3>Total Items in Cart: {cartItems.size}</h3>
                <h3>Total Cart amount: {cartAmount.toFixed(2)}</h3>
            </div>
            <br />
            <div className='d-flex flex-wrap'>
                {
                    cartItems ? Array.from(cartItems.values()).map((item, index) => {
                        return (
                            <CardComponent key={index} item={item} />
                        )
                    }) : <></>
                }
            </div>
        </div>
    )
}

export default Cart