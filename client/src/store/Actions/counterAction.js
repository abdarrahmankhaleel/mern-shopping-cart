import { DECREMENT, INCREMENT, INC_BY_VAL } from "../types/types"

export const IncrementAction=(dispatch)=>{
    dispatch({
        type:INCREMENT
    });
}
export const DecrementAction=(dispatch)=>{
    dispatch({
        type:DECREMENT
    });
}

export const IncrementByValueAction=(val,dispatch)=>{
    dispatch({
        type:INC_BY_VAL,
        value:val
    })
}