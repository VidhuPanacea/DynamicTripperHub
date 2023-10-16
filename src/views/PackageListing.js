import Packages from "service/package.service"
import { useLocation } from "react-router-dom"
import { useParams } from "react-router-dom"
import { useEffect, useState } from "react"

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, A11y } from 'swiper/modules';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'swiper/css';
import SwiperNewButton from "components/Slider/SwiperNewButton/SwiperNewButton";
import DetailCard from "components/Slider/Card/DetailCard";
import { Link } from 'react-router-dom';

export default function PackageListing(props) {

    const [pkg, setPkg] = useState({})

    const location = useLocation()
    useEffect(() => {
        console.log(location?.state)
        setPkg(location?.state?.pkg)

    }, []);


    return <>
        <h1>{pkg?.name}</h1>


        <div className='conainer-margin'>


            <div className='container-slider-main'>

                <h1 className='slider-tittle-main' style={{ marginBottom: "-1.5em" }}>Hello</h1>

                <Swiper
                    modules={[Navigation, Pagination, A11y]}
                    spaceBetween={15}
                    slidesPerView={5}
                >
                    <SwiperNewButton />
                    {Packages.map(pkg => (<SwiperSlide ><DetailCard pkg={pkg} img={pkg.image} tittle={pkg.name} />  </SwiperSlide>))}
                </Swiper>

            </div>
        </div>
    </>
}