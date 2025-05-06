import { Add_To_CART } from "./constant"



export const addToCart = (data) =>{

    console.warn("action called",data)
    return {
        type:Add_To_CART,
        data
    }
}