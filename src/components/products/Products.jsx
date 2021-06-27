import React from 'react'
import { useDispatch } from 'react-redux'
import { useHistory } from 'react-router-dom'
import { getSingleProduct } from '../../redux/actions/product.actions'

function Products({product}) {
    const history=useHistory()
    const dispatch=useDispatch()
   
    function handleClick(){
        history.push(`/view/${product.id}`)
        dispatch(getSingleProduct(product.id))    
    }
    return (
        <div onClick={handleClick} className="grid m-4 cursor-pointer lg:mb-4 max-w-max-content place-items-center">
         <img className="object-contain w-full h-32" src={product.image} alt={product.category}/>
         <div className="flex flex-col items-center">
             <span>{product.title}</span>
             <span>${product.price}</span>
         </div>
        </div>
    )
}

export default Products
