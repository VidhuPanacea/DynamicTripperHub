import React from 'react'
import './ThreeCardPic.css'
import first from "../../../assets/img/bg1.jpg"
const ThreeCardPic = () => {
  return (
    <div>
        <div className='three-card-container'>
        <div className='top-div'>
        <img className='first-card-image' src={first} alt='first-top'/>
        </div>
        <div className='bottom-div'>
        <img className='second-card-image' src={first} alt='first-top'/>
        <img className='second-card-image' src={first} alt='first-top'/>
        </div>
        </div>
    </div>
  )
}

export default ThreeCardPic