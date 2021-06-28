import { FETCH_PRODUCT_FAILED, FETCH_PRODUCT_REQUEST, FETCH_PRODUCT_SUCCESS, FETCH_TYPE_FAILED, FETCH_TYPE_REQUEST, FETCH_TYPE_SUCCESS, GET_SINGLEPRODUCT_ID } from "../actiontypes"



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


export const productTypeReducer=(state={
    loading:false,
    productsType:[],
    error:'',
},action)=>{
    const {payload,type}=action

    switch(type){
        case FETCH_TYPE_REQUEST:
            return{
                ...state,
                loading:true,
            }
        case FETCH_TYPE_SUCCESS:
            return {
                ...state,
                loading:false,
                productsType:payload,
                error:'',
            }
        case FETCH_TYPE_FAILED:
            return {
                ...state,
                loading:false,
                productsType:[],
                error:payload,
            }
         default:return state
    }
}