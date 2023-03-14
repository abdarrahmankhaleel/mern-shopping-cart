import { useEffect, useState } from 'react';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import './index.css'
import Products from './components/Products/Products';
import data from './/data/data.json';
import Filter from './components/Filter/Filter';
import Cart from './components/Cart/Cart';
import Counter from './components/Counter/Counter';
import { Provider } from 'react-redux';
import store from './store/store';
function App() {
  const [products,setProducts]=useState(data);
  const [sort,setsort]=useState("");
  const [filter,setfilter]=useState("");

 
// const filterBySize=(e)=>{
//   console.log(e.target.value);
//   setfilter(e.target.value);
// if (e.target.value=="all") {
//  setProducts(data);
// }else{
//   let productsClone=data;

//   let newProducts=productsClone.filter(p=>p.size.indexOf(e.target.value)!=-1);

//   setProducts(newProducts);

// }

// }


// const addToCart = (product) => {
//   const cartItemsClone = [...cartItems];
//   var isProductExist = false;
//   cartItemsClone.forEach(p => {
//     if(p.id == product.id) {
//       p.qty++;
//       p.totalPrice=p.qty*p.price;
//       isProductExist= true;
//     }
//   })
//   if(!isProductExist) {
//     cartItemsClone.push({...product, qty: 1,totalPrice:product.price})
//   }
//   setCartItems(cartItemsClone);
// }

// useEffect(()=>{
//   localStorage.setItem('cartItems',JSON.stringify(cartItems));
// },[cartItems])




  return (
    <Provider store={store}>
    <div className="App">
       <Header/>
      <main className='wrapper'>
      <Products />
       <Filter />
      </main>
      <Cart/>
     <Footer/> 

     {/* <Counter/> */}
    </div>

    </Provider>
  );
}

export default App;
