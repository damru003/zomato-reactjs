import React, { useContext } from 'react'
import './Fooditem.css';
import { StoreContext } from '../context/StoreContext';

export const FoodItem = ({id,name,price,description,image}) => {

    const {cartitems,addToCart,removeFromCart} = useContext(StoreContext)
  return (
    <>
        <div className="food-item">

            <div className="food-item-image-container">
                <img src={image} className='food-item-image'/>
                {
                    !cartitems[id]?<img className='add' onClick={() => {addToCart(id)}} src={'assets/add_icon_white.png'} />
                    :<div className='food-item-counter'>
                        <img src={'assets/remove_icon_red.png'} onClick={() => removeFromCart(id)}/>
                        <p>{cartitems[id]}</p>
                        <img src={'assets/add_icon_green.png'} onClick={() => addToCart(id)}/>
                    </div>
                }
            </div>

            <div className="food-item-info">
                <div className="food-item-name-rating">
                    <p>{name}</p>
                    <img src={'assets/rating_starts.png'}/>
                </div>
                <p className='food-item-desc'>{description}</p>
                <p className='food-item-price'>Rs. {price}/-</p>
            </div>
        </div>
    </>
  )
}