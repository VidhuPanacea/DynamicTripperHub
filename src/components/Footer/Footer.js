import React from 'react'
import './Footer.css'
import FooterTop from './FooterTop/FooterTop'
import FooterMiddle from './FooterMiddle/FooterMiddle'
import FooterMiddle2 from './FooterMiddle2/FooterMiddle2'
import FooterBottom from './FooterBottom/FooterBottom'
const Footer = () => {
  return (
    <div className='footer-main-container'>
        <FooterTop/>
        <FooterMiddle/>
        <FooterMiddle2/>
        <FooterBottom/>
    </div>
  )
}

export default Footer