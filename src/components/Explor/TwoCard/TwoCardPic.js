import React from 'react'
import flag from '../../../assets/img/bg4.jpg'
import './TwoCardPic.css'
const TwoCardPic = () => {
  return (
    <div>
        <div className='two-image-container'>
        <img className='first-image-div' src={flag} alt='two'/>
        <p className='two-card-top-image-title'>Maldives</p>
        <p className='two-card-top-image-price'> From Rs.9853</p>
        <img className='second-image-div' src={flag} alt='two'/>
        <p className='two-card-bottom-image-title'>Maldives</p>
        <p className='two-card-bottom-image-price'> From Rs.9853</p>
        </div>
    </div>
  )
}

export default TwoCardPic 