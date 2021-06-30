import React, { useState } from 'react'
import {AiOutlineSearch,AiOutlineShoppingCart} from 'react-icons/ai'
import { useSelector } from 'react-redux'
import { useHistory } from 'react-router-dom'

function Header() {
    const history=useHistory()
    const [input,setInput]=useState('')
    const {cart}=useSelector(state=>state.product)
    
    function handleClick(){
        history.push('/cart')
    }
    function handleSubmit(e){
        e.preventDefault()
        history.push(`/collection/${input}`)
        setInput('')
    }

    return (
        <div className="flex items-center justify-between h-12 text-xs border-b border-gray-300 ">
        
         <form onSubmit={handleSubmit} className="flex items-center w-full">
             <AiOutlineSearch className="mr-2" size={26}/>
             <input onChange={(e)=>setInput(e.target.value)} className="w-full bg-transparent focus:outline-none" type="text" placeholder="search by category" value={input}/>
         </form>
        
        <div onClick={handleClick} className="flex items-center pl-8 cursor-pointer">
          <AiOutlineShoppingCart size={26}/>
          <span className="pl-2 font-medium whitespace-pre">Cart ({cart.length})</span>
        </div>
        </div>
    )
}

export default Header
