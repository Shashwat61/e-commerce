import React from 'react'
import {AiOutlineSearch,AiOutlineShoppingCart} from 'react-icons/ai'
import { useSelector } from 'react-redux'
import { useHistory } from 'react-router-dom'
function Header() {
    const history=useHistory()
    const {cart}=useSelector(state=>state.product)
    function handleClick(){
        history.push('/cart')
    }

    return (
        <div className="flex items-center justify-between h-12 text-xs border-b border-bordercolor ">
        
         <form className="flex items-center w-full">
             <AiOutlineSearch className="mr-2" size={26}/>
             <input className="w-full bg-transparent focus:outline-none" type="text" placeholder="search"/>
         </form>
        
        <div onClick={handleClick} className="flex items-center pl-8 cursor-pointer">
          <AiOutlineShoppingCart size={26}/>
          <span className="pl-2">Cart{cart.length}</span>
        </div>
        </div>
    )
}

export default Header
