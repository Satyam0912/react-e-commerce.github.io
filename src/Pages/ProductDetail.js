import { useParams } from "react-router-dom";
import React, { useEffect } from "react";
import { Button, ListGroup, Card } from 'react-bootstrap';
import { useProduct } from "../Context/ProductContext";
import { HeartIcon, ShoppingCartIcon, StarIcon } from "@heroicons/react/solid";

const ProductDetail = () => {

    const { product_id } = useParams();
    const { product, setProductId, loading } = useProduct();
    
    useEffect(() => {
        setProductId(product_id);
    }, [product_id]);

    return (
        <>
            {(!loading && product?.id) ? (
                <Card style={{ maxWidth: '50rem', margin: 'auto' }}>
                    <Card.Img variant="top" src={product.image} style={{ maxWidth: '15rem', margin: 'auto' }} />
                    <Card.Body>
                        <Card.Title>{product.title}</Card.Title>
                    </Card.Body>
                    <ListGroup className="list-group-flush">
                        <ListGroup.Item className='d-flex' style={{ maxHeight: '2.5rem' }}>
                            {[...Array(Math.round(product.rating.rate))].map((e, i) =>
                                <StarIcon
                                    key={`star-${i}`}
                                    className='icon text-primary'
                                    aria-hidden='true' />
                            )}
                            {[...Array(5 - Math.round(product.rating.rate))].map((e, i) =>
                                <StarIcon
                                    key={`star-${i}`}
                                    className='icon'
                                    aria-hidden='true' />
                            )}
                            <p className='text-xs ml-1 font-light mt-0.5'>{product.rating.count}</p>
                        </ListGroup.Item>
                        <ListGroup.Item className='my-auto text-success h6'>
                            <span >Price: ${product.price}</span>
                        </ListGroup.Item>
                        <ListGroup.Item>
                            <Card.Text>
                                {product.description}
                            </Card.Text>
                        </ListGroup.Item>
                        <ListGroup.Item className="d-flex justify-content-evenly">
                            <Button variant="primary">
                                <ShoppingCartIcon height={30} />
                                Add to Cart
                            </Button>
                            <Button variant="danger">
                                <HeartIcon height={30} />
                                Add to Favourite
                            </Button>
                        </ListGroup.Item>
                    </ListGroup>
                </Card>) : (<h1>...laoding</h1>)
            }
        </>
    )

}

export default ProductDetail;