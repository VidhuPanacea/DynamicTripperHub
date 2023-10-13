import React from 'react'
import './ThreeCardPic.css'
import first from "../../../assets/img/bg1.jpg"
const ThreeCardPic = () => {
  return (
    <div>
        <div className='three-card-container'>
        <div className='top-div'>
        <img className='first-card-image' src={first} alt='first-top'/>
        <p className='three-card-top-image-title'>Maldives</p>
        <p className='three-card-top-image-price'> From Rs.9853</p>
        </div>
        <div className='bottom-div'> 
        <img className='second-card-image' src={first} alt='first-top'/>
        <p className='three-card-bottom-left-image-title'>Goa</p>
        <p className='three-card-bottom-left-image-price'> From Rs.9853</p>
        
        <img className='third-card-image' src={first} alt='first-top'/>
        <p className='three-card-bottom-right-image-tittle'>rajgir</p>
        <p className='three-card-bottom-right-image-price'> From Rs.9853</p>
        </div>
        </div>
    </div>
  )
}

export default ThreeCardPic