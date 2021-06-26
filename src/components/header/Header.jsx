import React from 'react'
import {AiOutlineSearch,AiOutlineShoppingCart} from 'react-icons/ai'
function Header() {
    return (
        <div className="flex items-center justify-between h-12 text-xs border-b border-bordercolor ">
        
         <form className="flex items-center w-full">
             <AiOutlineSearch className="mr-2" size={26}/>
             <input className="w-full bg-transparent focus:outline-none" type="text" placeholder="search"/>
         </form>
        
        <div className="flex items-center pl-8">
          <AiOutlineShoppingCart size={26}/>
          <span className="pl-2">Cart(1)</span>
        </div>
        </div>
    )
}

export default Header
