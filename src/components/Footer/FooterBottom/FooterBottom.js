import React from 'react'
import './Footerbottom.css'
import { BsFillTelephoneFill } from "react-icons/bs";
const FooterBottom = () => {
  return (
    <div className='footer-bottom-main-container'>
      <div className='footer-bottom-Pickyourtrail'>
        <h1>Pickyourtrail</h1>
        <a>About Us</a>
        <a>Careers</a>
        <a>Blog</a>
        <a>Testimonials</a>
        <a>Visa</a>
        <a>Press</a>
      </div>

      <div className='footer-bottom-policy'>
        <h1>Policy</h1>
        <a>Frequently asked questions</a>
        <a>Terms & Conditions</a>
        <a>Privacy</a>
        <a>Cancellations</a>
        <a>Sitemap</a>
        <a>Contact Us</a>
      </div>


      <div className='footer-bottom-taik'>
        <h1>Talk to us</h1>
        <a>planners@pickyourtrail.com</a>
        <a><img src={BsFillTelephoneFill} alt='phone' />+919360991166</a>
        <a><img src={BsFillTelephoneFill} alt='phone' />+919080601268</a>
      
      </div>

      <div className='footer-bottom-social'>
        <h1>Social</h1>
        <a> Facebook</a>
        <a>Twitter</a>
        <a>Instagram</a>
        <a>LinkedIn</a>
        <a>Youtube</a>
        <p>Travel Troops Global Private Ltd. © 2023<br/> all rights reserved.</p>
      </div>
    </div>
  )
}

export default FooterBottom 