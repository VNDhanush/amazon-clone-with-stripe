import React from 'react'
import './Product.css'
import { useStateValue } from './StateProvider'

function Product(props) {
    const [{ basket }, dispatch] = useStateValue();
    
    const addToBasket = () => {
        //dispatchh the item into data layer
        dispatch({
            type: 'ADD_TO_BASKET',
            item: {
                id: id,
                title: title,
                image: image,
                price: price,
                rating: rating,
            },
        });
    };
    
    const {id, title, image, price, rating} = props
    return (
        <div className='product'>
            <div className='product__info'>
                <p>{title}</p>
                
                <div className='product__rating__outside'>
                    <div className='product__rating'>
                        {Array(rating)
                            .fill()
                            .map((_, i) => (
                                <img src='https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/160/microsoft/74/white-medium-star_2b50.png' className='rating' />
                            ))}

                    </div>
                     

                    <p className='product__price'>
                        <small>$</small>
                        <strong>{price}</strong>
                    </p>  
                </div>
            </div>
            <img 
                src={image}
                alt=''
            />
            <button onClick={addToBasket}>Add To Basket</button>
        </div>
    )
}

export default Product
