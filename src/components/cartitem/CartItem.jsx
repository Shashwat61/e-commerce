import React from 'react'
import { useDispatch } from 'react-redux'
import { addToCart, removeFromCart } from '../../redux/actions/product.actions'

function CartItem({item:{title,description,id,image,price}}) {
    const dispatch=useDispatch()
    function handleAdd(){
        dispatch(addToCart(id))
    }

    function handleRemove(){
        dispatch(removeFromCart(id))
    }
    
    return (
        <div className="grid pb-8 md:grid-cols-3 md:place-items-center">
              <div className="grid md:col-span-1 place-items-center">
               <img className="object-contain h-64 sm:h-48" src={image} alt=""/>   
              </div>
              <div className="py-8 space-y-4 md:col-span-1">
              <p>{title}</p>
              <p>{description}</p>
              <p>${price}</p>
              </div>
              <div className="flex justify-around md:col-span-1 md:place-content-center md:grid">
                  <button onClick={handleAdd} className="px-4 py-2 text-gray-100 bg-black border border-black rounded md:mb-4">Add</button>
                  <button onClick={handleRemove} className="px-4 py-2 text-gray-100 bg-black border border-black rounded ">Remove</button>
              </div>
              
          </div>
    )
}

export default CartItem
