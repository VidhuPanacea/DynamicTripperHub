import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, A11y } from 'swiper/modules';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'swiper/css';
import "./Slider.css";
import SwiperNewButton from './SwiperNewButton/SwiperNewButton';
import Card from './Card/Card';
import first from '../../assets/img/Group 107.png'
import { Link } from 'react-router-dom';
import {internationalPackages} from 'service/package.service';

const Slider = ({ uptext,tittle, clrtitle }) => {
  const images = [
    { image: require("../../assets/img/Group 107.png") }
  ];


  return (

    <div className='conainer-margin'>


      <div className='container-slider-main'>

        <h3 className="style-heading">{uptext}</h3>
        <h1 className='slider-tittle-main' style={{ marginBottom: "-1.5em" }}>{tittle}<span>{clrtitle}</span></h1>

        <Swiper
          modules={[Navigation, Pagination, A11y]}
          spaceBetween={15}
          slidesPerView={5}
        >
          <SwiperNewButton />
          {internationalPackages.map(pkg => (<SwiperSlide ><Card pkg={pkg} img={pkg.image} tittle={pkg.name} />  </SwiperSlide>))}
        </Swiper>

      </div>
    </div>
  )
}

export default Slider