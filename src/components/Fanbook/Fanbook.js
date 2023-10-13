import React from 'react'
import './Fanbook.css'
import first from '../../assets/img/bg1.jpg'
import second from '../../assets/img/bg3.jpg'
const Fanbook = () => {
  return (
    <div className='fanbook-container'>
        <div className='left-side-container'>
        <img className='gif-fanbook' src='https://media.tenor.com/sjxHvA92nF4AAAAC/castle-animated.gif' alt='gif'/>
        <button className='fanbook-watch-button'>
            Watch Viedo 
        </button>
        </div> 
        <div className='right-side-container'>
        <div className='fanbook-second-container'>
            <h1 className='fanbook-tittle'>FANBOOK</h1>
            <h1 className='Testimonial-tittle'>Testimonials</h1>
        </div>
        <img className='first-image-fanbook' src={first} alt='first' />
        <img className='second-image-fanbook' src={second} alt='second'/>
        <img className='first-image-fanbook' src={first} alt='first' />
        
        <img className='center-image-fanbook' src={first} alt='first' />
       
        <img className='second-image-fanbook' src={second} alt='second'/>
        <img className='first-image-fanbook' src={first} alt='first' />
        <img className='second-image-fanbook' src={second} alt='second'/>
        
        
        <button className='fanbook-button'>
            View more Testomonials 
        </button>
        
        </div>
    </div>
  )
}

export default Fanbook