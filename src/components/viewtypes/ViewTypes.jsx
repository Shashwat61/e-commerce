import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { fetchProductType } from '../../redux/actions/product.actions'
import Products from '../products/Products'
import MoonLoader from "react-spinners/ClipLoader";

function ViewTypes() {
    const {type}=useParams()
    
    const dispatch=useDispatch()
    console.log(type)
    
    useEffect(()=>{
 
     dispatch(fetchProductType(type))
    },[dispatch,type])

    const {productsType,loading}=useSelector(state=>state.category)
    console.log(productsType)
    return (
        <div className="layout">

        <div className="grid grid-cols-2 py-4 place-items-center md:grid-cols-3">
          {
              loading ? <div className="loader">
                  <h2 className="pb-8 text-base font-medium sm:text-xl">Getting items for you</h2>
                  <MoonLoader
                  type="Puff"
                  color="#555557"
                  height={100}
                  width={100}                  
                  /></div> 
              :productsType.length>0 ? productsType.map(product=><Products key={product.id} type product={product}/>) 
                :<div className="w-full pt-8 col-span-full">
                    <h1 className="w-full text-xl text-center sm:text-4xl">
                        Coming Soon
                        </h1>
                    
                </div>
               
            }
        </div>
            </div>
    )
}

export default ViewTypes
