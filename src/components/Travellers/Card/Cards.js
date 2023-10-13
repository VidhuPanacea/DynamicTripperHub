import React from 'react'
import './Card.css'
import honeymoon from '../../../assets/img/bg6.jpg'
const Cards = () => {
  return (
    <div className='cards-main-container'>
        <img className='honeymoon' src={honeymoon} alt='HoneyMoon'/>
         <p className='one-traveller-title'>HoneyMoon</p>
    </div>
  )
}

export default Cards