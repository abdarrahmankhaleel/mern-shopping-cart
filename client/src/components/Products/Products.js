
import React  from 'react';
import Modal from 'react-modal';
import { useState } from 'react';
import '../../css/Products/Products.css'
import ProductModal from './ProductModal';



const Products = (props) => {
    const [product,setProduct]=useState("");

  const  openModal=(product)=>{
         setProduct(product);
    }
  const closeModal=()=>{
         setProduct(false);
    }
    
  return (
    <div className='products-wrapper'>
    {props.products.map(product=>(
        <div className='product-item' key={product.id}>
            <a href='#' onClick={()=>openModal(product)}>

             <img src={product.imageUrl}/>

            </a>
            <div className='info'> 
                <p className='title'>{product.title}</p>
                <p className='price'>{product.price}</p>
            </div>
            <button>Add To Cart</button>
        </div>
        )
    )}


 <ProductModal product={product} closeModal={closeModal}/>
    


    </div>
  )
}

export default Products