import React from 'react';
import './CheckoutProduct.css';
import { useStateValue } from './StateProvider';

function CheckoutProduct({ id, image, title, price, rating, hideButton }) {
    const [{ basket }, dispatch] = useStateValue();

    const removeFromBasket = () => {
        //remove item from basket
        dispatch({
            type: 'REMOVE_FROM_BASKET',
            id: id,

        })
    }

    return (
        <div className='checkoutProduct'>
            <img className='checkoutProduct__image' src={image} />
            <div className='checkoutProduct__info'>
                <p className='checkoutProduct__title'>{title}</p>

                <div className='checkoutProduct__rating'>
                    {
                        Array(rating)
                            .fill()
                            .map((_, i) => (
                                <img src='https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/160/microsoft/74/white-medium-star_2b50.png' className='rating' />
                            ))
                    }
                </div>
                <p className='checkoutProduct__price'>
                    <small>$</small>
                    <strong>{price}</strong>
                </p>

                {!hideButton && (
                    <button onClick={removeFromBasket}>Remove from basket</button>
                )}

            </div>

        </div>
    )
}

export default CheckoutProduct
