import React, { useContext } from 'react'
import './Cart.css';
import { StoreContext } from '../context/StoreContext';
import { useNavigate } from 'react-router-dom';

export const Cart = () => {

  const { cartitems, foodlist, removeFromCart, getTotalCartAmount } = useContext(StoreContext)
  
  const navigate = useNavigate();
  
  return (
    <>
      <div className="cart">
        <div className="cart-items">
          <div className="cart-items-title">
            <p style={{textAlign:'start'}}>Items</p>
            <p>Title</p>
            <p>Price</p>
            <p>Quantity</p>
            <p>Total</p>
            <p>Remove</p>
          </div>
          <br />
          <hr />
          {foodlist.map((item, index) => {
            if (cartitems[item._id] > 0) {
              return (
                <div>
                  <div className='cart-items-title cart-item-item'>
                    <img src={item.image} />
                    <p>{item.name}</p>
                    <p style={{ color: '#cb202d', fontWeight: '500' }}>Rs.{item.price}/-</p>
                    <p>{cartitems[item._id]}</p>
                    <p style={{ color: '#cb202d', fontWeight: '500' }}>Rs.{item.price * cartitems[item._id]}/-</p>
                    <p className='cross' onClick={() => removeFromCart(item._id)}>X</p>
                  </div>
                  <hr />
                </div>
              )
            }
          })}
        </div>
      </div>

      <div className="cart-bottom">
        <div className="cart-total">
          <h2>Cart Totals</h2>
          <div>
            <div className="carts-total-details">
              <p>SubTotal</p>
              <p>Rs.{getTotalCartAmount()}/-</p>
            </div>
            <hr />

            <div className="carts-total-details">
              <p>Delivery Charges</p>
              <p>Rs.{20}/-</p>
            </div>
            <hr />

            <div className="carts-total-details">
              <b>Total</b>
              <b>Rs.{getTotalCartAmount()+20}/-</b>
            </div>
            <button onClick={()=> navigate('/order')}>Proceed to Checkout</button>
          </div>

        </div>
      </div>
    </>
  )
}