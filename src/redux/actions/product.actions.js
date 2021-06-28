import axios from "axios"
import { ADD_TO_CART, FETCH_PRODUCT_FAILED, FETCH_PRODUCT_REQUEST, FETCH_PRODUCT_SUCCESS, FETCH_TYPE_FAILED, FETCH_TYPE_REQUEST, FETCH_TYPE_SUCCESS, GET_SINGLEPRODUCT_ID, REMOVE_FROM_CART } from "../actiontypes"

export const fetchProducts=()=>{
    return (dispatch)=>{
        dispatch({
          type:FETCH_PRODUCT_REQUEST
        })
        axios.get('https://fakestoreapi.com/products/')
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


export const fetchProductType=(type)=>{
    return (dispatch)=>{
        dispatch({
            type:FETCH_TYPE_REQUEST
        })
        axios.get(`https://fakestoreapi.com/products/category/${type}`)
        .then((res)=>{
            dispatch({
                type:FETCH_TYPE_SUCCESS,
                payload:res.data,
            })
        })
        .catch(err=>{
            dispatch({
                type:FETCH_TYPE_FAILED,
                payload:err.message,
            })
        })
    }
}


export const addToCart=(id)=>{
 return {
     type:ADD_TO_CART,
     payload:id,
 }
}

export const removeFromCart=(id)=>{
 return {
     type:REMOVE_FROM_CART,
     payload:id,
 }
}

