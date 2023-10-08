import React from 'react'
import flag from '../../../assets/img/bg4.jpg'
import './TwoCardPic.css'
const TwoCardPic = () => {
  return (
    <div>
        <div className='two-image-container'>
        <img className='first-image-div' src={flag} alt='two'/>
        <img className='second-image-div' src={flag} alt='two'/>
        </div>
    </div>
  )
}

export default TwoCardPic 