import { FETCH_PRODUCTS, FILTER_PROD_BY_SIZE, SORTINGPRODUCTS } from "../types/types";

const productReducer=(state={},action)=>{
    switch (action.type) {
        case FETCH_PRODUCTS:
            return {products:action.data,filterdProducts:action.data}

        case FILTER_PROD_BY_SIZE:
            return {
                ...state,
                size:action.data.size,
                filterdProducts:action.data.filterdProducts
            }

        case SORTINGPRODUCTS:
            return {
                ...state,
                size:action.data.size,
                filterdProducts:action.data.sortedProducts
            }

        default:
            return state;          
        break;
    }

}

export default productReducer