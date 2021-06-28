import clsx from 'clsx'
import React, {  useState } from 'react'
import {FaBars} from 'react-icons/fa'
import {ImCross} from 'react-icons/all'
import { useHistory } from 'react-router-dom'

function Sidebar() {
    const [show,setShow]=useState(false)
    const history=useHistory()

    function handleClick(){
        setShow(!show)
    }
    // if(window.innerWidth>'640px'){
    //     setShow(true)
    // }
    console.log(show)
    
   function goToHandle(e){
       history.push(`/collection/${e.target.innerHTML}`)
   }
    return (
        
        <div className={clsx('text-center grid place-items-center sm:block')}>
            <div className="grid w-full sm:hidden place-items-center">
                { show ?
                 <ImCross className="transition duration-1000"  size={26} onClick={handleClick}/> 
                 :<FaBars className="transition duration-1000" size={26} onClick={handleClick}/>
                }
                </div>
                
        <div className={clsx( 'transition duration-1000 ease-in-out w-48 pt-10 sm:block', show ? 'block':'hidden'  )}>
            <h2 onClick={()=>history.push('/')} className="text-4xl font-bold cursor-pointer ">Simple.</h2>
            <ul className="pt-12 ">
                
                <li onClick={()=>history.push('/')}  className="py-3 border-t border-b cursor-pointer ">Home</li>
                <li onClick={goToHandle} className="py-3 border-t border-b cursor-pointer ">electronics</li>
                <li onClick={goToHandle} className="py-3 border-t border-b cursor-pointer ">men's clothing</li>
                <li onClick={goToHandle} className="py-3 border-t border-b cursor-pointer ">women's clothing</li> 
                <li onClick={goToHandle}  className="py-3 border-t border-b cursor-pointer ">jewelery</li>
                <li onClick={goToHandle} className="py-3 border-t border-b cursor-pointer ">Outwear</li>
                <li onClick={goToHandle} className="py-3 border-t border-b cursor-pointer ">Pants</li>
                <li onClick={goToHandle} className="py-3 border-t border-b cursor-pointer ">Shirts</li>
                <li onClick={goToHandle} className="py-3 border-t border-b cursor-pointer ">T-shirts</li>
            </ul>
        </div>
        </div>
    )
}

export default Sidebar
