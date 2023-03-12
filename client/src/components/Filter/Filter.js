import React from 'react'
import '../../css/Filter/Filter.css'
const Filter = () => {
  return (
    <div className='filter-wrapper'>
        <h2>Filter</h2>
        <p>Number All Products :4 Products</p>
        <div className='filter-size'>
            <label>Size</label>
            <select>
                <option value="S">S</option>
                <option value="M">M</option>
                <option value="XL">XL</option>
                <option value="L">L</option>
                <option value="XXL">XXL</option>
                <option value="XXL">XXL</option>
            </select>
        </div>
        <div className='filter-order'>
            <label>order</label>
            <select>
                <option value="latest">Latest</option>
                <option value="lowest">lowest</option>
                <option value="hist">Hightest</option>

              
              
            </select>
        </div>
  </div>
  )
}

export default Filter