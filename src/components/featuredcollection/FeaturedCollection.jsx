import React from 'react'
import Products from '../products/Products'
function FeaturedCollection() {
    return (
        <div className="">
         <h2 className="text-lg font-medium ">Featured Collection</h2>
         <div className="grid grid-cols-1 py-4 place-items-center sm:grid-cols-2 md:grid-cols-3">
         {
             [...Array(16)].map((item)=>(
                 <Products/>   
                 
             ))
         }
         </div>
        </div>
    )
}

export default FeaturedCollection
