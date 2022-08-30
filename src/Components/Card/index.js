import React from 'react'
import styles from './styles.module.css';
import { HeartIcon, ShoppingCartIcon, StarIcon } from '@heroicons/react/solid';
import { Link } from 'react-router-dom';

const Card = ({ item, addToCart, addToFav }) => {
    // console.log("sdsdsd", item);

    return (
        <div className={styles.card}>
            <div className={styles.cardLink}>
                <button className={styles.favButton} onClick={(e) => { addToFav(e) }}>
                    <HeartIcon />
                </button>

                <div className={styles.cardHeader}>
                    <Link to={`product/${item.id}`}>
                        <img className={styles.cardImg} src={item.image} alt="" />
                    </Link>
                </div>

                <div className={styles.cardBody}>
                    <>
                        <p className={styles.cardTitle}>
                            <span className={styles.brand} >
                                Brand,
                            </span>
                            {item.title}
                        </p>
                    </>
                    <div className={styles.rating}>
                        {[...Array(Math.round(item.rating.rate))].map((e, i) =>

                            <StarIcon
                                key={`star-${i}`}
                                className={styles.starIcon}
                                aria-hidden='true' />
                        )}
                        {[...Array(5 - Math.round(item.rating.rate))].map((e, i) =>

                            <StarIcon
                                key={`star-${i}`}
                                className={styles.emptyStarIcon}
                                aria-hidden='true' />
                        )}
                        <p className='text-xs ml-1 font-light mt-0.5'>{item.rating.count}</p>
                    </div>

                    <div>
                        <div className='my-auto'>
                            <span >${item.price}</span>
                        </div>
                    </div>

                    <div className={styles.addToCart}>
                        <button className={styles.addToCartButton}>
                            <ShoppingCartIcon className={styles.shoppingCartIcon}></ShoppingCartIcon>
                            <span className={styles.buttonText} onClick={(e) => addToCart(e)}>Add to cart!</span>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Card