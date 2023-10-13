import React from 'react'
import './Press.css'
import yourStory from '../../assets/img/yourstory.png'
import theHindu from '../../assets/img/thehindu.png'
import toi from '../../assets/img/toi-logo.png'
import nasscom from '../../assets/img/nasscom.png'
import economics from '../../assets/img/econmic_times.png'
const Press = () => {
  return (
    <div className='press-container'>
    <p className='press-tittle'>What the press says</p>
    <div className='press-div-container'>
      <img className='yourstory' src={yourStory} alt='yourstory'/>
      <img className='hindu' src={theHindu} alt='The Hindu' />
      <img className='nasscom' src={nasscom} alt='Nasscom' />
      <img className='economics' src={economics} alt='economics time' />
    
      
    </div>
    </div> 
  )
}

export default Press 