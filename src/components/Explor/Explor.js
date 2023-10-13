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
const Explor = ({tittle, tittle2}) => {
  return (
    <div className='explor-main-container'>  
    <div className='explor-container'>
      <h1 className='explore-title' >{tittle}</h1>
      <p  style={{marginBottom:"-1.5em"}} className='explore-title2' >{tittle2}</p>

   
      <div className='new-div-continer'>

    <Swiper
        modules={[Navigation, Pagination, A11y]} 
        spaceBetween={15}
        slidesPerView={3}
      >
        <SwiperNewButton/> 
     
         <SwiperSlide ><ThreeCardPic/> </SwiperSlide>
         <SwiperSlide ><OneCardPic/> </SwiperSlide>
         <SwiperSlide > <TwoCardPic/> </SwiperSlide>
         <SwiperSlide ><ThreeCardPic/> </SwiperSlide> 
        


      </Swiper>
      
     
    
     </div>
    
    </div>
    </div>
  )
}

export default Explor