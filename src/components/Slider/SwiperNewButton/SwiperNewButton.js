import React from 'react'
import { useSwiper } from 'swiper/react'
import "./SwiperNewButton.css"
import less from '../../../assets/img/less-than.png'
import more from '../../../assets/img/more-than.png'
const SwiperNewButton = () => {
    const swiper = useSwiper();
  return (
    <div className='swiper-nav-btns'>
    
    <button onClick={() => swiper.slidePrev()}><img src={less} alt='Prev'/></button>
    <button onClick={() => swiper.slideNext()}><img src={more} alt='Next'/></button>
    </div>
  )
}

export default SwiperNewButton