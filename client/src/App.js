import { useState } from 'react';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import './index.css'
import Products from './components/Products/Products';
import data from './/data/data.json';
import Filter from './components/Filter/Filter';
function App() {
  const [products,setProducts]=useState(data);
  console.log(products);
  return (
    <div className="App">
      <Header/>
      <main className='wrapper'>
      <Products products={products}/>
       <Filter/>
      </main>

     <Footer/>
    </div>
  );
}

export default App;
