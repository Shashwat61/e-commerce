import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Products from '../products/Products'
function FeaturedCollection() {
    // const dispatch=useDispatch()
    const {products}=useSelector(state=>state.product)
    return (
        <div className="">
         <h2 className="text-lg font-medium ">Featured Collection</h2>
         <div className="grid grid-cols-2 py-4 place-items-center md:grid-cols-3">
         {
             products.map((product)=>(
                 <Products key={product.id} product={product}/>   
                 
             ))
         }
         </div>
        </div>
    )
}

export default FeaturedCollection
