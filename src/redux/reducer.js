
import { Add_To_CART } from "./constant"
export const cartData =(data = [], action) => {
    
    // if(action.type === 'Add_To_CART')
    // {
    //     console.warn("reduce called",action)
    //     return action.data
    // }
    // else{
    //     return"no action match"
    // }
    switch(action.type){
        case Add_To_CART:
            console.warn("Add_To_CART CONDITION",action)
            return [action.data,...data]
           
            default:
                return data;
    }
    
}