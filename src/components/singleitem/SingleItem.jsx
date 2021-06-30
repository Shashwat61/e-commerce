import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addToCart } from '../../redux/actions/product.actions'

function SingleItem() {
    const dispatch=useDispatch()
    const {singleProduct:{id,image,title,price,description}}=useSelector(state=>state.product)
    function handleClick(){
        dispatch(addToCart(id))
    }
    return (
        <div className="layout">
             
             
         <div className="grid md:grid-cols-2">

                 <div  className="">
                 <img className="object-contain w-full h-44 md:h-72" src={image} alt=""/>
             </div>
             
                 <div className="pt-8">
                     <div className="text-xl text-center ">
                         <h2 className="lg:pb-4">{title}</h2>
                         <span className="">${price}</span>
                         
                    </div>
                   <button onClick={handleClick} className="w-full p-4 mt-4 transition duration-500 ease-in-out border border-black rounded-sm md:px-2 md:py-4 md:mt-16 hover:bg-black hover:text-gray-100 focus:outline-none">Add To Cart</button>
                <div className="pt-8">
                    <h2 className="text-lg font-medium">Description</h2>
                    <p className="text-base ">{description}</p>
                </div>
                 </div>
                 </div>
                     
        
        </div>
    )
}

export default SingleItem
                    
                 
                 
                 
