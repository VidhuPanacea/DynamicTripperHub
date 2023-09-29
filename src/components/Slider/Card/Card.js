import React from 'react'
import "./Card.css"
const Card = ({actualData}) => {
    const {jawSummary} = actualData;
  return (
    
    <div className='banner-image'>
    <figure>
        <img src={jawSummary.backgroundImage.url} alt='{jawsummary.tittle}' />
       
    </figure>
    </div>

   
  )
}

export default Card