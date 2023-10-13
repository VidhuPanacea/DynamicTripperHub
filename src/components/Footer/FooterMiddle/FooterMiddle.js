import React from 'react'
import './FooterMiddle.css'
import logo from '../../../assets/img/tripper logo.png'
const FooterMiddle = () => {
  return (
    <div className='footer-main-middle-container'>
      <hr/>
      <div className='footer-middle-container'>
      <div className='footer-middle-left'>
        <p className='footer-middle-para'>Pickyourtrail is India's leading online travel company that delivers tailor-made international holidays. Pickyourtrail aims to 
        change the customer experience so they can explore destinations at their own pace with completely customized tour packages. 
        Our unique matching algorithm and price comparison engine ensures that travellers build their itinerary completely suited to their 
        tastes and at the best online prices. Pickyourtrail's intelligent platform helps save time and effort, without having to wait for a 
        travel agent's quote, yet letting you have the fun of planning your own trip!
        Over the years, we have helped more than 10000+ travellers from across 14 countries explore their dream international holiday destinations.
        Pickyourtrail has the highest Five-star rating on Facebook by travellers, making us a top rated trip planner in India. We are an Amadeus 
        Next incubated start-up and one of the top 6 finalists of the prestigious APAC Travel Innovation Summit award.</p>
      </div>
      <div className='footer-middle-right'>
        <img className='pic-your' src={logo} alt='middle'/>
      </div>
      </div>
      <hr/>
    </div>
  )
}

export default FooterMiddle 