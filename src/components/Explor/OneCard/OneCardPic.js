import React from 'react'
import './OneCardPic.css'
import second from '../../../assets/img/bg3.jpg'
const OneCardPic = () => {
  return (
    <div>
        <div className='one-image-container'>
        <img className='one-image' src={second} alt='one-image'/>
        <p className='one-image-title'>Maldives</p>
        <p className='one-image-price'> From Rs.9853</p>
        </div>
    </div>
  )
}

export default OneCardPic