import React from 'react'
import "./Card.css"
const Card = ({img,tittle}) => {
   
  return (
    
    <div className='banner-image'>
    <figure>
        <img src={img} alt={tittle} />
        
    </figure>
    </div>

   
  )
}

export default Card