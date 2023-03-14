import { ADD_TO_CART, REMOVE_FROM_CART } from "../types/types";


// export const addToCartAction=(product)=>{

//     return (dispatch,getState)=>{
//        let cartItemsClone =getState().cart.cartItems;
//        var isProductExist = false;
//        cartItemsClone=   cartItemsClone.forEach(p => {
//       if(p.id == product.id) {
//         p.qty++;
//         p.totalPrice=p.qty*p.price;
//         isProductExist= true;
//       }
//     })
//     if(!isProductExist) {
//         cartItemsClone=  cartItemsClone.push({...product, qty: 1,totalPrice:product.price})
//     }
   
//     dispatch({
//         type:ADD_TO_CART,
//         data:{
//             cartItems:cartItemsClone
//         }
//     })

//         localStorage.setItem('cartItems',JSON.stringify(cartItemsClone));

//         }
//     }

export const addToCart = (product) => {
    return (dispatch, getState) => {
        const cartItems = getState().cart.cartItems
        console.log(" const cartItems = getState().cart.cartItems",cartItems);
        const cartItemsClone = [...cartItems];




        console.log(" const cartItemsClone = [...cartItems];",cartItemsClone);
        var isProductExist = false;
        cartItemsClone.forEach(p => {
            if(p._id == product._id) {
                p.qty++;
                isProductExist= true;
            }
        })
        if(!isProductExist) {
            cartItemsClone.push({...product, qty: 1})
        }

        dispatch({
            type: ADD_TO_CART,
            data: {
                cartItems: cartItemsClone
            }
        });
        localStorage.setItem('cartItems', JSON.stringify(cartItemsClone))
    }
}

  

    export const  removeFromCartAction = (product) => {
        return (dispatch,getState)=>{
            let cartItemsClone =getState().cart.cartItems;
            let updatedCartItems=cartItemsClone.filter(p=>p.id!=product.id)
            dispatch({
                type:REMOVE_FROM_CART,
                data:{
                    cartItems:updatedCartItems
                }
            })
            
            localStorage.setItem('cartItems',JSON.stringify(updatedCartItems));

  
  }

}
  
  

