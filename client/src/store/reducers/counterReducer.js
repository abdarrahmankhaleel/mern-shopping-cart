import { DECREMENT, INCREMENT, INC_BY_VAL } from "../types/types";

const countReducer=(state={count:0,user:"ali",age:33},action)=>{
    switch (action.type) {
        case INCREMENT:
            return {...state,count:state.count+1}
            break;
            case DECREMENT:
                return {...state,count:state.count-1}
            case INC_BY_VAL:
                return {...state,count:state.count+action.value}
        default:
            return state;          
        break;
    }

}

export default countReducer