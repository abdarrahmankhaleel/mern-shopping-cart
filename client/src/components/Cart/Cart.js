
import React  from 'react';
import { useState } from 'react';
import '../../css/Cart/Cart.css'
const Cart = (props) => {

const [showForm,setShowForm]=useState(false);
const [value,setValue]=useState("");

const handelOnChange=(e)=>{

    console.log(e.target.name , e.target.value );

    setValue((prevInput)=>({prevInput,[e.target.name]:e.target.value}));

    console.log(value);
}

const submitForm=(e)=>{
    e.preventDefault();
    const order={
        name:value.name,
        email:value.email,
    }
    console.log(order);
}


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


{
                props.cartItems.length !== 0 && 
                (
                    <div className="cart-footer">
                        <div className="total">Total : ${props.cartItems.reduce( (acc, p) => {
                            return acc + p.totalPrice
                        }  , 0)} </div>
                        <button onClick={()=>setShowForm(true)}> select products </button>
                    </div>
                )
            }

            
            {
                ( showForm==true &&
            <div className="checkout-form">
                <span className="close-icon" onClick={()=>setShowForm(false)}> &times; </span> 
                <form>
                <div>
                    <label> Name </label>
                    <input 
                        type="text"
                        required 
                        name="name" 
                        onChange={handelOnChange}
                        />
                </div>

                <div>
                    <label> Email </label>
                    <input 
                        type="text"
                        required 
                        name="email" 
                        onChange={handelOnChange}
                        />
                </div>
                                        
                    <div>
                        <button type="submit" onClick={submitForm}>  Checkout </button>
                    </div>
                </form>
            </div>
                )

        }   
        </div>




</div>


  )
}

export default Cart