import React from 'react'
import { useSelector } from 'react-redux'
import { useHistory } from 'react-router-dom'
import CartItem from '../cartitem/CartItem'
import {loadStripe} from '@stripe/stripe-js'
import axios from 'axios'
import {AiOutlineShoppingCart} from 'react-icons/ai'

function Cart() {
    const history=useHistory()
    const {cart}=useSelector(state=>state.product)
    let sum=0
    //use useeffect and reducer for subtotal??
    const subTotal=cart.map((item)=>sum+=item.price).splice(-1)
    const stripePromise=loadStripe(import.meta.env.VITE_APP_PUBLISHABLE_KEY)

    async function createCheckoutSession(){
        const stripe=await stripePromise

        const checkoutSession=await axios.post('http://localhost:4242/create-checkout-session',{
            cartItems:cart,
        })
        //redirect user to stripe checkout
        const result=await stripe.redirectToCheckout({
            sessionId:checkoutSession.data.id,
            
        })
        if(result.error) alert(result.error.message)
    }
    return (
        <div className="px-8 py-16 sm:py-32">
            <h2 className="py-8 text-xl font-medium">Cart Items</h2> 
           {cart.length >0 ?
               cart.map((item,i)=>(
                   <CartItem key={i} item={item}/>
               ))
               :
               <div className="grid place-items-center">
                <AiOutlineShoppingCart size={26}/>
               <h2 className="text-xl font-medium">
                    Your cart is empty, add some items 
                </h2>
                    </div>
           }       
        <div className="grid pt-16 space-y-4 font-medium place-items-center">
            <h2>SubTotal ${cart.length>0 ? subTotal[0]: '0'}</h2>
            <button onClick={()=>history.push('/')} className="p-2 border border-black rounded focus:outline-none w-max-content " >Continue Shopping</button>
            <button onClick={createCheckoutSession} role="link" className="p-2 text-gray-100 bg-black border rounded focus:outline-none border-bordercolor w-max-content" >Checkout</button>
        </div>
        </div>
    )
}

export default Cart
