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
    console.log(show)
    
    function handleToggle(){
       if(window.innerWidth<'640'){
          setShow(!show) 
        }       
    }
    
   function goToHandle(e){
       history.push(`/collection/${e.target.innerHTML}`)
   }
   
   console.log(window.innerWidth)
    return (
        <div className={clsx('text-center grid place-items-center sm:block')}>
            <div className="grid w-full sm:hidden place-items-center">
                { show ?
                 <ImCross className="transition duration-1000"  size={26} onClick={handleClick}/> 
                 :<FaBars className="transition duration-1000" size={26} onClick={handleClick}/>
                }
                </div>
                
        <div onClick={handleToggle} className={clsx( 'transition duration-1000 ease-in-out w-48 pt-10 sm:block', show ? 'block':'hidden'  )}>
            <h2 onClick={()=>history.push('/')} className="text-4xl font-bold cursor-pointer ">Simple.</h2>
            <ul  className="pt-12 ">
                
                <li onClick={()=>history.push('/')}  className="border-t list ">home</li>
                <li onClick={goToHandle} className="list">electronics</li>
                <li onClick={goToHandle} className="list">men&apos;s clothing</li>
                <li onClick={goToHandle} className="list">women&apos;s clothing</li> 
                <li onClick={goToHandle}  className="list">jewelery</li>
                <li onClick={goToHandle} className="list">Outwear</li>
                <li onClick={goToHandle} className="list">Pants</li>
                <li onClick={goToHandle} className="list">Shirts</li>
                <li onClick={goToHandle} className="list">T-shirts</li>
            </ul>
        </div>
        </div>
    )
}

export default Sidebar
