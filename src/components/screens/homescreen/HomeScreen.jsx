import React from 'react'
import FeaturedCollection from '../../featuredcollection/FeaturedCollection'
import ExtraFeaturedCollection from '../../extrafeaturedcollection/ExtraFeaturedCollection'
function HomeScreen() {
    return (
        <div className="px-8 py-16 sm:py-32 ">
         <FeaturedCollection/>
         <ExtraFeaturedCollection/>
        </div>
    )
}

export default HomeScreen
