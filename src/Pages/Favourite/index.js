import React from 'react';
import styles from './styles.module.css';
import { useProduct } from '../../Context/ProductContext';
import FavCard from '../../Components/FavCard';

const Favourite = () => {

    const { favItems, setFavItems } = useProduct();

    const removeFromFav = (e) => {

        let prevFavItems = favItems;

        prevFavItems = prevFavItems.filter(item => {
            return item.id !== e.id;
        })

        setFavItems(prevFavItems)
    }

    return (
        <div className={styles.cardGroup}>
            {
                favItems?.map((item, index) => {
                    return (
                        <FavCard key={index} item={item} removeFromFav={() => removeFromFav(item)} />
                    )
                })
            }
        </div>
    )
}

export default Favourite