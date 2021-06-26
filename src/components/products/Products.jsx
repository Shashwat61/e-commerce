import React from 'react'

function Products({product}) {
    console.log(product)
    return (
        <div className="grid m-4 lg:mb-4 max-w-max-content place-items-center">
         <img className="object-contain w-full h-32" src={product.image} alt={product.category}/>
         <div className="flex flex-col items-center">
             <span>{product.title}</span>
             <span>${product.price}</span>
         </div>
        </div>
    )
}

export default Products
