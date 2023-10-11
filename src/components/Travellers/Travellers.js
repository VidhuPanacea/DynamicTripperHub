import React from 'react'
import './Travellers.css'
import honeymoon from '../../assets/img/bg5.jpg'
import family from '../../assets/img/bg6.jpg'
import friend from '../../assets/img/bg7.jpg'
import TeamOuting from '../../assets/img/bg8.jpg'
const Travellers = () => {
  return (
    <div className='traveller-main-container'>
            <h1 className='traveller-vacation-tittle'>VACATION FOR ALL</h1>
            <h1 className='traveller-tittle'>Travellers</h1>
            
            <div className='Traveller-container'>
                <img className='honeymoon' src={honeymoon} alt='HoneyMoon'/>
                <img className='family' src={family} alt='Family'/>
                <img className='friend' src={friend} alt='Friend'/>
                <img className='Team-outing' src={TeamOuting} alt='Team outing'/>
            </div>
    </div>
  )
}

export default Travellers