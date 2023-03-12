import { useState } from 'react';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import './index.css'
import Products from './components/Products/Products';
import data from './/data/data.json';
import Filter from './components/Filter/Filter';
function App() {
  const [products,setProducts]=useState(data);
  const [sort,setsort]=useState("");
  const [filter,setfilter]=useState("");
 
const filterBySize=(e)=>{
  console.log(e.target.value);
if (e.target.value=="all") {
 setProducts(data);
}else{
  let productsClone=data;

  let newProducts=productsClone.filter(p=>p.size.indexOf(e.target.value)!=-1);

  setProducts(newProducts);

}

}




const sorting=(e)=>{
  let typeOfSorting=e.target.value;
  if(typeOfSorting==""){
    setProducts(data);
  }else{
    let productsClone=data;
  
    let newProducts=productsClone.sort(function(first,second){
      if(typeOfSorting=="lowest"){
        return first.price - second.price
      }else if (typeOfSorting=="hist"){
        return  second.price-first.price 
      }else{
        return  first.id<second.id ? 1 : -1
      }
    });
  
    console.log(typeOfSorting);
  
    setProducts(newProducts);
  }

}

  return (
    <div className="App">
      <Header/>
      <main className='wrapper'>
      <Products products={products}/>
       <Filter 
       filterBySize={filterBySize}
       sorting={sorting}
       />
      </main>

     <Footer/>
    </div>
  );
}

export default App;
