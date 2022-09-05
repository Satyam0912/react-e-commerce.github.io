import { useParams } from "react-router-dom";
import React, { useEffect } from "react";
import { Button, ListGroup, Card } from 'react-bootstrap';
import { useProduct } from "../Context/ProductContext";
import { HeartIcon, ShoppingCartIcon, StarIcon } from "@heroicons/react/solid";

const ProductDetail = () => {

    const { product_id } = useParams();
    const { cartItems, favItems, product, setProductId, loading } = useProduct();

    useEffect(() => {
        setProductId(product_id);
    }, [product_id]);

    return (
        <>
            {(!loading && product?.id) ? (
                <Card className="m-auto p-3" style={{ maxWidth: '50rem' }}>
                    <Card.Link className='ms-auto'>
                        <HeartIcon height={40} width={40} className={favItems.has(product.id) ? 'text-danger' : 'text-secondary'} />
                    </Card.Link>
                    <Card.Body className="text-center">
                        <Card.Img className="" src={product.image} style={{ maxWidth: '15rem', margin: 'auto' }} />

                        <ListGroup className="list-group-flush text-start">
                            <Card.Title>{product.title}</Card.Title>
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
                            <ListGroup.Item>
                                <Button variant={cartItems.has(product.id) ? "danger" : "primary"}>
                                    <ShoppingCartIcon height={30} />
                                    <span>{cartItems.has(product.id) ? "Remove from cart" : "Add to Cart"}</span>
                                </Button>
                            </ListGroup.Item>
                        </ListGroup>
                    </Card.Body>
                </Card>) : (<h1>...laoding</h1>)
            }
        </>
    )

}

export default ProductDetail;