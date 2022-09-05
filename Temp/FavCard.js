import React from 'react'
import { ShoppingCartIcon, StarIcon } from '@heroicons/react/solid';
import { Link } from 'react-router-dom';

const FavCard = ({ item, removeFromFav }) => {

    return (
        <div className=''>
            <div className=''>

                <div className=''>
                    <Link to={`product/${item.id}`}>
                        <img className='' src={item.image} alt="" />
                    </Link>
                </div>

                <div className=''>
                    <>
                        <p className=''>
                            <span className=''>
                                Brand,
                            </span>
                            {item.title}
                        </p>
                    </>
                    <div className=''>
                        {[...Array(Math.round(item.rating.rate))].map((e, i) =>

                            <StarIcon
                                key={`star-${i}`}
                                className=''
                                aria-hidden='true' />
                        )}
                        {[...Array(5 - Math.round(item.rating.rate))].map((e, i) =>

                            <StarIcon
                                key={`star-${i}`}
                                className=''
                                aria-hidden='true' />
                        )}
                        <p className='text-xs ml-1 font-light mt-0.5'>{item.rating.count}</p>
                    </div>

                    <div>
                        <div className='my-auto'>
                            <span >${item.price}</span>
                        </div>
                    </div>

                    <div className=''>
                        <button className=''>
                            <ShoppingCartIcon className=''></ShoppingCartIcon>
                            <span className='' onClick={(e) => removeFromFav(e)}>Remove from Favourite</span>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default FavCard