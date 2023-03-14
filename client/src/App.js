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
  const [cartItems,setCartItems]=useState(JSON.parse(localStorage.getItem('cartItems'))||[]);
 
const filterBySize=(e)=>{
  console.log(e.target.value);
  setfilter(e.target.value);
if (e.target.value=="all") {
 setProducts(data);
}else{
  let productsClone=data;

  let newProducts=productsClone.filter(p=>p.size.indexOf(e.target.value)!=-1);

  setProducts(newProducts);

}

}


const addToCart = (product) => {
  const cartItemsClone = [...cartItems];
  var isProductExist = false;
  cartItemsClone.forEach(p => {
    if(p.id == product.id) {
      p.qty++;
      p.totalPrice=p.qty*p.price;
      isProductExist= true;
    }
  })
  if(!isProductExist) {
    cartItemsClone.push({...product, qty: 1,totalPrice:product.price})
  }
  setCartItems(cartItemsClone);
}

useEffect(()=>{
  localStorage.setItem('cartItems',JSON.stringify(cartItems));
},[cartItems])


const removeFromCart = (product) => {
  console.log(product);
  let cartItemsClone = [...cartItems];

  console.log("cartItemsClone before remove ",cartItemsClone);

 console.log("cartItemsClone after remove ",cartItemsClone.filter(p=>p.id!=product.id));

  setCartItems(cartItemsClone.filter(p=>p.id!=product.id));

  console.log(cartItems);

}



const sorting=(e)=>{
  let typeOfSorting=e.target.value;
  setsort(e.target.value);
  if(e.target.value==""){
    setProducts(data);
    return;
  }else{
    let productsClone=data;
  
    let newProductsSort=productsClone.sort(function(first,second){
      if(e.target.value=="lowest"){
        return first.price - second.price
      }else if (e.target.value=="hist"){
        return  second.price-first.price 
      }else{
        return  first.id<second.id ? 1 : -1
      }
    });
  
    console.log(e.target.value);
  
    setProducts(newProductsSort);
  }
}

  return (
    <Provider store={store}>
    <div className="App">
      {/* <Header/>
      <main className='wrapper'>
      <Products products={products} addToCart={addToCart}/>
       <Filter sorting={sorting} sort={sort} filter={filter} filterBySize={filterBySize}/>
      </main>
      <Cart cartItems={cartItems} removeFromCart={removeFromCart}/>
     <Footer/> */}

     <Counter/>
    </div>

    </Provider>
  );
}

export default App;
