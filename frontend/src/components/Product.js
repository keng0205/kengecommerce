import React from 'react'
import { Card } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import Rating from './Rating'

const Product = ({ product }) => {
    return (
        <Card className='my-3 p-3 rounded'>
            <Link to={`/product/${product._id}`}>
                <Card.Img src={product.image} variants='top' />
            </Link>

            <Card.Body>
                <Link to={`/product/${product._id}`}>
                    <Card.Title as='div'>{product.name}</Card.Title>
                </Link>
            </Card.Body>


            <Card.Text as='div'>
                <div className='my-3'>
                    <Rating rating={product.rating} review={product.numReviews}></Rating>
                </div>
            </Card.Text>
            <Card.Text as='h3'>
                RM{product.price}
            </Card.Text>


        </Card>
    )
}

export default Product
