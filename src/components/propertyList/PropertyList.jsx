import React from 'react'
import './PropertyList.css'
import hotel from '../../assets/images/hotel.jpg'
import appart from '../../assets/images/appart.jpg'
import villas from '../../assets/images/villas.jpg'
import resort from '../../assets/images/ressorts.jpg'
import cabin from '../../assets/images/cabin.jpg'
const PropertyList = () => {

  return (
    <div className="pList">
      <div className="pListItem">
        <img src={hotel} alt="pListImg" className='pListImg'/>
        <div className="pListTitles">
            <h1>Hotels</h1>
            <h2>233 hotels</h2>
        </div>
      </div>
      <div className="pListItem">
        <img src={appart} alt="pListImg" className='pListImg' />
        <div className="pListTitles">
            <h1>Appartments</h1>
            <h2>233 hotels</h2>
        </div>
      </div>
      <div className="pListItem">
        <img src={villas} alt="pListImg" className='pListImg'/>
        <div className="pListTitles">
            <h1>Villas</h1>
            <h2>2433 villas</h2>
        </div>
      </div>
      <div className="pListItem">
        <img src={cabin} alt="pListImg" className='pListImg'/>
        <div className="pListTitles">
            <h1>Cabins</h1>
            <h2>133 villas</h2>
        </div>
      </div>
      <div className="pListItem">
        <img src={resort} alt="pListImg" className='pListImg'/>
        <div className="pListTitles">
            <h1>Resort</h1>
            <h2>1433 villas</h2>
        </div>
      </div>
    </div>
  )
}

export default PropertyList
