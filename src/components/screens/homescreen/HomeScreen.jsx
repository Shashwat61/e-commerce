import React from 'react'
import FeaturedCollection from '../../featuredcollection/FeaturedCollection'
import ExtraFeaturedCollection from '../../extrafeaturedcollection/ExtraFeaturedCollection'
function HomeScreen() {
    return (
        <div className="layout ">
         <FeaturedCollection/>
         {/* <ExtraFeaturedCollection/> */}
        </div>
    )
}

export default HomeScreen
