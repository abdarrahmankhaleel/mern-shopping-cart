
import React  from 'react';
import '../../css/Products/Products.css'
const Products = (props) => {
  return (
    <div className='products-wrapper'>
    {props.products.map(product=>(
        <div className='product-item' key={product.id}>
            <img src={product.imageUrl}/>
            <div className='info'> 
                <p className='title'>{product.title}</p>
                <p className='price'>{product.price}</p>
            </div>
            <button>Add To Cart</button>
        </div>
        )
    )}
    </div>
  )
}

export default Products