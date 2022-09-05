import React from 'react';
import { HeartIcon, ShoppingCartIcon, StarIcon } from '@heroicons/react/solid';
import { Link } from 'react-router-dom';
import { Card, Col, Row } from 'react-bootstrap';
import '../CardComponent/cardComponent.css';
import { useProduct } from '../../Context/ProductContext';

const CardComponent = ({ item }) => {

    const { cartItems, setCartItems, setCartAmount, favItems, setFavItems, setfavItemsCnt } = useProduct();

    const toggleCartItems = (e) => {
        let cartAmount = 0;
        let prevCartItems = cartItems;

        let isAvailable = prevCartItems?.has(e.id) ? e.id : null;

        if (isAvailable) {
            prevCartItems.delete(isAvailable)
        }
        else {
            prevCartItems.set(e.id, e)
        }

        prevCartItems?.forEach(value => {
            cartAmount += value.price;
        });

        setCartAmount(cartAmount)
        setCartItems(prevCartItems)
    }

    const toggleFavItems = (e) => {

        let prevFavItems = favItems;

        let isAvailable = prevFavItems?.has(e.id) ? e.id : null;

        if (isAvailable) {
            prevFavItems.delete(isAvailable)
        }
        else {
            prevFavItems.set(e.id, e)
        }

        setfavItemsCnt(prevFavItems.size)
        setFavItems(prevFavItems)
    }

    return (
        <Card className='p-2 m-2' style={{ width: '16rem' }}>
            <Card.Link className='ms-auto fav-btn' onClick={() => { toggleFavItems(item) }}>
                <HeartIcon className='icon text-danger' />
            </Card.Link>

            <Card.Body className='text-center d-flex flex-column justify-content-between p-0'>
                <Link to={`/product/${item.id}`}>
                    <Card.Img variant="top" src={item.image} className='card-image' alt=""
                        style={{ maxHeight: '10rem', width: 'auto', maxWidth: '8rem' }} />
                </Link>
                <div className='text-start'>
                    <div>
                        <p className='m-0'>
                            <span className='m-0'><span className='fw-bold'>Brand:</span> {item.title.length > 50 ? item.title.substring(0, 50) + '...' : item.title}</span>
                        </p>
                    </div>
                    <div className='d-flex m-0' style={{ height: '28px' }}>
                        {[...Array(Math.round(item.rating.rate))].map((e, i) =>
                            <StarIcon
                                key={`star-${i}`}
                                className='icon text-primary'
                                aria-hidden='true' />
                        )}
                        {[...Array(5 - Math.round(item.rating.rate))].map((e, i) =>
                            <StarIcon
                                key={`star-${i}`}
                                className='icon'
                                aria-hidden='true' />
                        )}
                        <p className='text-xs ml-1 font-light mt-0.5'>({item.rating.count})</p>
                    </div>
                    <p className='my-auto text-success h6 mb-1'>
                        <span >Price: ${item.price}</span>
                    </p>
                    <Row>
                        <Col>
                            <Card.Link className='btn btn-addToCart bg-primary m-auto' onClick={() => toggleCartItems(item)}>
                                <ShoppingCartIcon className='icon'></ShoppingCartIcon>
                                <span>Add to cart!</span>
                            </Card.Link>
                        </Col>
                    </Row>
                </div>
            </Card.Body>
        </Card>
    )
}

export default CardComponent