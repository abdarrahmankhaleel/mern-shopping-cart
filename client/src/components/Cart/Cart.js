import React from 'react'
import '../../css/Cart/Cart.css'
const Cart = (props) => {
  return (


    <div className="cart-wrapper">
    <div className="cart-title"> 

        </div>
 
        <div className="cart-items">
            {props.cartItems.map(item => (
                <div className="cart-item" key={item.id}>
                    <img src={item.imageUrl} alt=""/>
                    <div className="cart-info">
                        <div>
                            <p> title {item.title} </p>
                            <p> qty: {item.qty}  </p>
                            <p> price: ${item.price} </p>
                            <p> total price: ${item.totalPrice} </p>
                        </div>
                        <button onClick={() => props.removeFromCart(item)}>
                                Remove
                            </button>
                    </div>
                </div>
            ))}
        </div>




</div>


  )
}

export default Cart