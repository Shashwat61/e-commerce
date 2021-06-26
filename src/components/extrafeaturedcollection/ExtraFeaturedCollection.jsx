import React from 'react'
import ExtraFeaturedProducts from '../extrafeaturedproducts/ExtraFeaturedProducts'
function ExtraFeaturedCollection() {
    return (
        <div className="py-16">

        <h2 className="text-lg font-medium text-center ">Allow your style to match your ambition</h2>
        <div className="grid grid-cols-2 py-4 md:grid-cols-3 lg:grid-cols-4">

             {
                 [...Array(16)].map((item)=>(
                     
                     <ExtraFeaturedProducts/>   
                     
                     ))
                    }
        </div>
                    </div>
    )
}

export default ExtraFeaturedCollection
