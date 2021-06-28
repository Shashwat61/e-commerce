import React from 'react'
import { useSelector } from 'react-redux'
import CartItem from '../cartitem/CartItem'
function Cart() {
    const {cart}=useSelector(state=>state.product)
    return (
        <div className="px-8 py-16 sm:py-32">
            
       
       
            
            <h2 className="py-8 text-xl font-medium">Cart Items</h2> 
           {
               cart.map((item,i)=>(
                   <CartItem key={i} item={item}/>
               ))
           }     
          
        
        <div className="grid pt-16 space-y-4 font-medium place-items-center">
            <h2>SubTotal $9000</h2>
            <button className="p-2 border border-black rounded focus:outline-none w-max-content " >Continue Shopping</button>
            <button className="p-2 text-gray-100 bg-black border rounded focus:outline-none border-bordercolor w-max-content" >Checkout</button>
        </div>
        </div>
    )
}

export default Cart
