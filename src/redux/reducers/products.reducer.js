import { FETCH_PRODUCT_FAILED, FETCH_PRODUCT_REQUEST, FETCH_PRODUCT_SUCCESS } from "../actiontypes"



export const productReducer=(state={
    products:[],
    loading:false,
    error:''
},action)=>{
    const {payload,type}=action
    switch(type){
        case FETCH_PRODUCT_REQUEST:
            return {
                ...state,
                loading:true,
            }
        case FETCH_PRODUCT_SUCCESS:
            return {
                ...state,
                loading:false,
                products:payload,

            }
        case FETCH_PRODUCT_FAILED:
            return {
                ...state,
                loading:false,
                products:[],
                error:payload,
            }
        default:return state
    }
}