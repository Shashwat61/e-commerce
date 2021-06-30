import React from 'react'
import { useSelector } from 'react-redux'
import Products from '../products/Products'
import ClipLoader from "react-spinners/ClipLoader";
import clsx from 'clsx';

function FeaturedCollection() {
    // const dispatch=useDispatch()
    const {products,loading}=useSelector(state=>state.product)
    return (
        <div className="">
         <h2 className={clsx("text-lg font-medium",!loading ? 'block':'hidden' )}>Featured Collection</h2>
         <div className="grid grid-cols-2 py-8 place-items-center md:grid-cols-3">
         {!loading ?  
             products.map((product)=>(
                 <Products key={product.id} product={product}/>   
                 
             ))
             :(<div className="pt-8 loader">
                 <h2 className="pb-8 text-base font-medium sm:text-xl">Getting items for you</h2>
                <ClipLoader
                type="Puff"
                color="#555557"
                height={100}
                width={100}
                />
                </div>
             )
         }
         </div>
        </div>
    )
}

export default FeaturedCollection
