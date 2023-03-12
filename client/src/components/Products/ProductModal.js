import React from 'react'
import Modal from 'react-modal';
import { useState } from 'react';
const ProductModal = (props) => {
    const {product,closeModal} = props
  return (
    <Modal isOpen={product} onRequestClose={closeModal}>
    <span onClick={closeModal}>&times;</span>
    <div className='product-desc'>
        <img src={product.imageUrl}/>
        <p>{product.title}</p>
        <p>{product.desc}</p>
    </div>
    </Modal>
  )
}

export default ProductModal