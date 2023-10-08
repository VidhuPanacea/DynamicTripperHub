import React from 'react'
import './Explor.css'
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'swiper/css';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, A11y } from 'swiper/modules';
import SwiperNewButton from 'components/Slider/SwiperNewButton/SwiperNewButton'
import ThreeCardPic from './ThreeCard/ThreeCardPic';
import OneCardPic from './OneCard/OneCardPic';
import TwoCardPic from './TwoCard/TwoCardPic';
const Explor = () => {
  return (
    <div className='explor-container'>
      <h1 className='explore-title'>QUICK GETAWAY DESTINATIONS</h1>
      <p  style={{marginBottom:"-1.5em"}} className='explore-title2' >Ideal for 3-5 days trip</p>

   
<div className='new-div-continer'>

    <Swiper
        modules={[Navigation, Pagination, A11y]} 
        spaceBetween={15}
        slidesPerView={3}
      >
        <SwiperNewButton /> 
     
         <SwiperSlide ><ThreeCardPic/> </SwiperSlide>
         <SwiperSlide ><OneCardPic/> </SwiperSlide>
         <SwiperSlide > <TwoCardPic/> </SwiperSlide>
         <SwiperSlide ><ThreeCardPic/> </SwiperSlide>
        


      </Swiper>
      
     
    
</div>
    
    </div>
  )
}

export default Explor