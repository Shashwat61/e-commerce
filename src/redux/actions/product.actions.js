import axios from "axios"
import { FETCH_PRODUCT_FAILED, FETCH_PRODUCT_REQUEST, FETCH_PRODUCT_SUCCESS, GET_SINGLEPRODUCT_ID } from "../actiontypes"

export const fetchProducts=()=>{
    return (dispatch)=>{
        dispatch({
          type:FETCH_PRODUCT_REQUEST
        })
        axios.get('https://fakestoreapi.com/products?limit=12')
        .then((res)=>{
            dispatch({
                type:FETCH_PRODUCT_SUCCESS,
                payload:res.data,
            })
        })
        .catch((err)=>{
            dispatch({
                type:FETCH_PRODUCT_FAILED,
                payload:err.message,
            })
        })
    }
}

export const getSingleProduct=(item)=>{
    console.log(item)
  
        return {
            type:GET_SINGLEPRODUCT_ID,
            payload:item,
   }
}