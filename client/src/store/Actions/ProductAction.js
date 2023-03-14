import { FETCH_PRODUCTS, FILTER_PROD_BY_SIZE, SORTINGPRODUCTS } from "../types/types"

export const fetchProductsAction=()=>{
    return (dispatch)=>{
        fetch('/api/products/').then(res=>res.json()).then(data=>{
            dispatch({
                type:FETCH_PRODUCTS,
                data:data
            })
        })
    }
}

export const filterProductsBySize=(allProducts,selectedSize)=>{
    let filterdProducts=[...allProducts];
    return (dispatch)=>{
        if(selectedSize!="all"){
            filterdProducts=allProducts.filter(p=>p.size.indexOf(selectedSize)!=-1);
        }
        dispatch({
            type:FILTER_PROD_BY_SIZE,
            data:{
                size:selectedSize,
                filterdProducts:filterdProducts
            }
        })
        }
    }


    export const sortingProducts=(allProducts,selectedSize)=>{
        let sortedProducts=[...allProducts];
        return (dispatch)=>{
            sortedProducts=sortedProducts.sort(function(first,second){
                if(selectedSize=="lowest"){
                  return first.price - second.price
                }else if (selectedSize=="hist"){
                  return  second.price-first.price 
                }else{
                  return  first.id<second.id ? 1 : -1
                }
              });
            dispatch({
                type:SORTINGPRODUCTS,
                data:{
                    size:selectedSize,
                    sortedProducts:sortedProducts
                }
            })
            }
        }