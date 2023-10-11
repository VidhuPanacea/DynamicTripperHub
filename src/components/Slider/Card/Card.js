import React from 'react'
import "./Card.css"
const Card = ({actualData}) => {
    const {jawSummary} = actualData;
  return (
    
    <div className='banner-image'>
    <figure>
        <img src={jawSummary.backgroundImage.url} alt='{jawsummary.tittle}' />
        <p className='name-para'>world is beautiful</p>
        <p className='name-tittle'>hello</p>
       
    </figure>
    </div>

   
  )
}

export default Card