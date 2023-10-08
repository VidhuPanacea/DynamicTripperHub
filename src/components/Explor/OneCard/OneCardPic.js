import React from 'react'
import './OneCardPic.css'
import second from '../../../assets/img/bg3.jpg'
const OneCardPic = () => {
  return (
    <div>
        <div className='one-image-container'>
        <img src={second} alt='one-image'/>
        </div>
    </div>
  )
}

export default OneCardPic