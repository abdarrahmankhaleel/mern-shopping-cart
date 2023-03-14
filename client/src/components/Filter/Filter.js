import React from 'react'
import { connect } from 'react-redux'
import '../../css/Filter/Filter.css'
import {filterProductsBySize , sortingProducts} from '../../store/Actions/ProductAction'
const Filter = (props) => {
  return (
    <div className='filter-wrapper'>
        <h2>Filter</h2>
        <p>Number All Products :4 Products</p>
        <div className='filter-size'>
            <label>Size</label>
            <select value={props.sort} onChange={(e)=>props.filterProductsBySize(props.filterdProducts,e.target.value)}>
                <option value="all">All</option>
                <option value="S">S</option>
                <option value="M">M</option>
                <option value="XL">XL</option>
                <option value="L">L</option>
                <option value="XXL">XXL</option>
            </select>
        </div>
        <div className='filter-order'>
            <label>order</label>
            <select value={props.sort} onChange={(e)=>props.sortingProducts(props.filterdProducts,e.target.value)}>
                <option value="latest">Latest</option>
                <option value="lowest">lowest</option>
                <option value="hist">Hightest</option>
            </select>
        </div>
  </div>
  )
}

export default connect((state)=>{
    return {
        sort:state.products.sort,
        size:state.products.size,
        products:state.products.products,
        filterdProducts:state.products.filterdProducts,
    }
},{
    filterProductsBySize,
    sortingProducts
})(Filter)