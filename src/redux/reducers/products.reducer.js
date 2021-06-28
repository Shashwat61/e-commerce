import { ADD_TO_CART, FETCH_PRODUCT_FAILED, FETCH_PRODUCT_REQUEST, FETCH_PRODUCT_SUCCESS, FETCH_TYPE_FAILED, FETCH_TYPE_REQUEST, FETCH_TYPE_SUCCESS, GET_SINGLEPRODUCT_ID, REMOVE_FROM_CART } from "../actiontypes"



export const productReducer=(state={ products:[],
    loading:false,
    error:'',
    singleProduct:[],
    cart:[
        
    ],
    count:0,
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
            // console.log(payload)
            return {
                ...state,
                singleProduct:item,
              
            }
        case ADD_TO_CART:
        //    console.log(payload)
           const itemtoAdd=state.products.find(prod=>prod.id==payload)
           console.log(itemtoAdd)
            const inCart=state.cart.find(prod=>prod.id==payload ? true:false)
            return {
                 ...state,
                 cart:[...state.cart,itemtoAdd],
            }
        case REMOVE_FROM_CART:
            console.log(payload)
            // const index=state.cart.findIndex(item=>item.id===payload)
            // let newBasket=[...state.cart]
            // if(index>=0){
            //     newBasket.splice(index,1)
            // }
            // else{
            //     console.warn(`cannot remove item with id ${payload}`)
            // }
            const arr=state.cart.map((item,i)=>item.id==payload ? i : -1).filter(item=>item!=-1).splice(0,1)
            let newCart=[...state.cart]
            newCart=state.cart.filter((item,i)=>i!=arr[0])
            return {
                ...state,
               cart:newCart
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