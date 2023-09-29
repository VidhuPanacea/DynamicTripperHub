import React, { useEffect, useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, A11y } from 'swiper/modules';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'swiper/css';
import "./Slider.css";
import SwiperNewButton from './SwiperNewButton/SwiperNewButton';
import Card from './Card/Card';

const Slider = () => {
  const [myimage, setMyImage] = useState([]);

  const options = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': '009c1feb38mshc2f10ef77a2ef07p1ea448jsn53b541b4fbf0',
      'X-RapidAPI-Host': 'netflix54.p.rapidapi.com'
    }
  };

  const fetchData = async () => {
    try {
      const response = await fetch('https://netflix54.p.rapidapi.com/search/?query=stranger&offset=0&limit_titles=50&limit_suggestions=20&lang=en', options);
      const result = await response.json();
      console.log(result);
      setMyImage(result.titles)

    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    fetchData()
  }, []);


  return (
    <div className='container'>

<h1 style={{marginBottom:"-1.5em"}}>MIDDLE EAST</h1>
      
      <Swiper
        modules={[Navigation, Pagination, A11y]}
        spaceBetween={15}
        slidesPerView={4}
      >
        <SwiperNewButton /> 
        {
          myimage.map((curElement) => {
            return <SwiperSlide ><Card key={curElement.summary.id} actualData={curElement} />  </SwiperSlide>
          })
        }


      </Swiper>

    </div>
  )
}

export default Slider