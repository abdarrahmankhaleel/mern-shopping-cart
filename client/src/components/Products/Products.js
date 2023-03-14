
import { connect } from 'react-redux';
import React, { useEffect }  from 'react';
import { useState } from 'react';
import Modal from 'react-modal';
import '../../css/Products/Products.css'
import {fetchProductsAction} from '../../store/Actions/ProductAction';
import ProductModal from './ProductModal';



const Products = (props) => {
    const [product,setProduct]=useState("");

  const  openModal=(product)=>{
         setProduct(product);
    }
  const closeModal=()=>{
         setProduct(false);
    }

    useEffect(()=>{
      props.fetchProductsAction()
    },[]);
    
  return (
    <div className='products-wrapper'>
    {props.products && props.products.length ? props.products.map(product=>(
        <div className='product-item' key={product.id}>
            <a href='#' onClick={()=>openModal(product)}>

             <img src={product.imageUrl}/>

            </a>
            <div className='info'> 
                <p className='title'>{product.title}</p>
                <p className='price'>{product.price}</p>
            </div>
            <button onClick={()=>props.addToCart(product)}>Add To Cart</button>
        </div>
        )
    ):"looogding .... "}


 <ProductModal product={product} closeModal={closeModal}/>
    


    </div>
  )
}

export default connect((state)=>{
 return{
   products:state.products.filterdProducts
 }
  },{fetchProductsAction})(Products)