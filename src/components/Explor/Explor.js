import React from 'react'
import './Explor.css'
import first from "../../assets/img/bg1.jpg"
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'swiper/css';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, A11y } from 'swiper/modules';
import SwiperNewButton from 'components/Slider/SwiperNewButton/SwiperNewButton'
import ThreeCardPic from './ThreeCard/ThreeCardPic';
import OneCardPic from './OneCard/OneCardPic';
const Explor = () => {
  return (
    <div className='explor-container'>
      <h1 className='explore-title'>QUICK GETAWAY DESTINATIONS</h1>
      <p  className='explore-title2' >Ideal for 3-5 days trip</p>

      {/* <div class="grid-container">
      
      <div class="item2">
      <img className='item-menu1' src={first} alt='first'/>
     </div>
     <div class="item3">
      <img className='item-menu2' src={first} alt='second'/>
     </div>
     <div class="item4">
     <img className='item-menu3' src={first} alt='second'/>
     </div>


     <div class="item5">
     <img className='main-container' src={first} alt='second'/>
     </div>  

     
     <div class="item6">
     <img className='item-menu4' src={first} alt='second'/>
     </div>
    <div class="item7">
    <img className='item-menu5' src={first} alt='second'/>
    </div>
      
    
</div> */}
<div className='new-div-continer'>
<ThreeCardPic/>
     <OneCardPic/>

</div>
    
    </div>
  )
}

export default Explor