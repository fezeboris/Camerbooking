import React from 'react'
import './FeaturedCities.css'
export const FeaturedCities = () => {
  return (
    <div className=' featured'>
        <div className="featuredItem">
            <img src="https://www.cameroon-tribune.cm//administrateur/photo/normal_cd82969.jpg" alt="featuredImage" className='featuredImg'/>
            <div className="featuredTitles">
                <h1>Yaounde</h1>
                <h2>223 properties</h2>
            </div>
        </div>
        <div className="featuredItem">
            <img src="https://vudaf.com/wp-content/uploads/2019/06/douala-1.jpg" alt="featuredImage"  className='featuredImg' />
            <div className="featuredTitles">
                <h1>Douala</h1>
                <h2>293 properties</h2>
            </div>
        </div>
        <div className="featuredItem">
            <img src="https://i.pinimg.com/originals/ab/f3/fd/abf3fd7f19ff939a0e977bc0e65f5172.jpg" alt="featuredImage" className='featuredImg'/>
            <div className="featuredTitles">
                <h1>Bafoussam</h1>
                <h2>193 properties</h2>
            </div>
        </div>
        <div className="featuredItem">
            <img src="https://cdn.britannica.com/32/124632-004-1C08C796/craters-Mount-Cameroon.jpg" alt="featuredImage" className='featuredImg'/>
            <div className="featuredTitles">
                <h1>Buea</h1>
                <h2>193 properties</h2>
            </div>
        </div>
    </div>
  )
}
