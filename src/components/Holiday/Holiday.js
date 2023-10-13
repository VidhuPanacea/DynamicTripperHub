import React from 'react'
import './Holiday.css'
import first from '../../assets/img/discount.jpeg'
const Holiday = () => {
  return (
    <div className='holiday-main-container'>
    <h1 className='holiday-tittle'>HOLIDAYS FOR EVERY</h1>
    <h1 className='holiday-tittle2'>budget</h1>
    <div className='holiday-bottom'>
    <img className='holiday-first-image' src= {first} alt='first'/>
    <img className='holiday-second-image' src= {first} alt='first'/>
    <img className='holiday-third-image' src= {first} alt='first'/>
    <img className='holiday-fourth-image' src= {first} alt='first'/>
    <img className='holiday-fifth-image' src= {first} alt='first'/>
     </div>
    </div>
  )
} 

export default Holiday