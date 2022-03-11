import React from 'react'
import CartItem from './CartItem';


const cartItems = [
    {
     id: 1,
     name: 'Apple',
     quantity: 10,
     price: 250
    },

    {
     id: 2,
     name: 'Apple',
     quantity: 10,
     price: 550
    },
];

const Cart = () => {
  return (
    <div className="borderedContainer cartContainer">
        <h2 className="title">Cart</h2>
        <div className="cartTotalPriceContainer">
            <p>Total: </p>
            <span className="cartTotalPrice">
                $250
            </span>
        </div>
        {cartItems.map(cartItem => <CartItem 
            cartItem={cartItem}
        
        
        />)}
    </div>
  )
}

export default Cart