import Card from '../../Components/Card';
import React from 'react'
import { useProduct } from '../../Context/ProductContext'
import styles from './styles.module.css';


const Products = () => {

    const { productList, loading, cartItems, setCartItems, setCartAmount, favItems, setFavItems } = useProduct();

    const addToCart = (e) => {
        let cartAmount = 0;
        let prevCartItems = cartItems;
        prevCartItems.push(e)
        prevCartItems.forEach(item => {
            cartAmount += item.price;
        });
        setCartAmount(cartAmount)
        setCartItems(prevCartItems)
    }

    const addToFav = (e) => {
        let prevFavItems = favItems;
        prevFavItems.push(e)
        setFavItems(prevFavItems)
    }

    return (
        <div className={styles.cardGroup}>
            {
                !loading ? (
                    productList?.map((item, index) => {
                        return (
                            <Card key={index} item={item} addToCart={() => addToCart(item)} addToFav={() => addToFav(item)} />
                        )
                    })
                ) : (
                    <button type="button" className={styles.spinner} disabled>
                        <div className={styles.spinnerOuter}>
                            <div className={styles.spinnerInner}></div>
                        </div>
                        Processing...
                    </button>
                )
            }
        </div>
    )
}

export default Products