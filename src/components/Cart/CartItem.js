import React from 'react'
import Icon from './Icon';
const CartItem = ({cartItem}) => {
  return (
    
          <div className="cartItem">
              <div className="cartItemDescContainer">
                    <b>Name: {cartItem.name}</b>
                    <p>Quantity: {cartItem.quantity}</p>
                    <p>Price: {cartItem.price}</p>



              </div>
              <div className="cartItemRemoveButtonContainer">
                        <span>
                            <Icon />
                        </span>


              </div>

            
          </div>
        )
      }

export default CartItem;