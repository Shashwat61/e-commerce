import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { fetchProductType } from '../../redux/actions/product.actions'
import Products from '../products/Products'
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
        <div className="grid grid-cols-2 py-4 place-items-center md:grid-cols-3">
          {
              loading ? <h2>Loading...</h2>
              : productsType.map(product=><Products key={product.id} type product={product}/>)
          }
        </div>
    )
}

export default ViewTypes
