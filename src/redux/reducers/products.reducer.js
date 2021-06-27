import { FETCH_PRODUCT_FAILED, FETCH_PRODUCT_REQUEST, FETCH_PRODUCT_SUCCESS, GET_SINGLEPRODUCT_ID } from "../actiontypes"



export const productReducer=(state={ products:[],
    loading:false,
    error:'',
    singleProduct:[],
}   ,action)=>{
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
        case GET_SINGLEPRODUCT_ID:
            const item=state.products.find(item=>item.id==payload)
            console.log(item)
            console.log(payload)
            return {
                ...state,
                singleProduct:item,
              
            }
        default:return state
    }
}


