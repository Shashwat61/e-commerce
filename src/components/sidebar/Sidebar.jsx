import clsx from 'clsx'
import React, {  useState } from 'react'
import {FaBars} from 'react-icons/fa'
import {ImCross} from 'react-icons/all'

function Sidebar() {
    const [show,setShow]=useState(false)

    function handleClick(){
        setShow(!show)
    }
    // if(window.innerWidth>'640px'){
    //     setShow(true)
    // }
    console.log(show)
    

    return (
        
        <div className={clsx('text-center grid place-items-center sm:block')}>
            <div className="grid w-full sm:hidden place-items-center">
                { show ?
                 <ImCross className="transition duration-1000"  size={26} onClick={handleClick}/> 
                 :<FaBars className="transition duration-1000" size={26} onClick={handleClick}/>
                }
                </div>
                
        <div className={clsx( 'transition duration-1000 ease-in-out w-48 pt-10 sm:block', show ? 'block':'hidden'  )}>
            <h2 className="text-4xl font-bold ">Simple.</h2>
            <ul className="pt-12 ">
                <li className="py-3 border-t border-b cursor-pointer ">Home</li>
                <li  className="py-3 border-t border-b cursor-pointer ">Accessories</li>
                <li  className="py-3 border-t border-b cursor-pointer ">Denim</li>
                <li  className="py-3 border-t border-b cursor-pointer ">FootWear</li> 
                <li  className="py-3 border-t border-b cursor-pointer ">Jeans</li>
                <li  className="py-3 border-t border-b cursor-pointer ">Outwear</li>
                <li  className="py-3 border-t border-b cursor-pointer ">Pants</li>
                <li  className="py-3 border-t border-b cursor-pointer ">Shirts</li>
                <li  className="py-3 border-t border-b cursor-pointer ">T-shirts</li>
            </ul>
        </div>
        </div>
    )
}

export default Sidebar
