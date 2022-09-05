import React from 'react';
import Card from '../Components/CardComponent/CardComponent';
import { useProduct } from '../Context/ProductContext';
import { Spinner } from 'react-bootstrap';

const Products = () => {

    const { productList, loading } = useProduct();

    return (
        <div className='d-flex flex-wrap justify-content-center'>
            {
                !loading ? (
                    productList?.map((item, index) => {
                        return (
                            <Card key={index} item={item} />
                        )
                    })
                ) : (
                    <div className='d-flex align-items-center'>
                        <Spinner animation="border" role="status" className='me-2'>
                            <span className="visually-hidden">Loading...</span>
                        </Spinner>
                        Loading...
                    </div>
                )
            }
        </div>
    )
}

export default Products