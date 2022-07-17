import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react/swiper-react';
import Image from '../elements/Image';
// Import Swiper styles
import 'swiper/swiper.min.css';
import "swiper/modules/pagination/pagination.min.css";
// import required modules
import { Pagination } from "swiper";
import SectionHeader from './partials/SectionHeader';

const Media = () => {
  
  const sectionHeader = {
    title: 'MEDIA',
  };

  return (
    <div className='media'>
       <SectionHeader data={sectionHeader} className="center-content" />
      <Swiper
        slidesPerView={4}
        spaceBetween={10}
        centeredSlides={true}
        pagination={{
          clickable: true,
          type: 'custom'
        }}
        modules={[Pagination]}
        loop={true}
        className="mySwiper"
      >
        <SwiperSlide>
        <Image
                    src={require('../.././assets/images/team1.png')}
                    alt="Boji Icon"
                    width={100}
                    height={600} />
        </SwiperSlide>
        <SwiperSlide>
        <Image
                    src={require('../.././assets/images/team1.png')}
                    alt="Boji Icon"
                    width={100}
                    height={350} />
        </SwiperSlide>
        <SwiperSlide>
        <Image
                    src={require('../.././assets/images/team1.png')}
                    alt="Boji Icon"
                    width={100}
                    height={350} />
        </SwiperSlide>
        <SwiperSlide>
        <Image
                    src={require('../.././assets/images/team1.png')}
                    alt="Boji Icon"
                    width={100}
                    height={350} />
        </SwiperSlide>
        <SwiperSlide>
        <Image
                    src={require('../.././assets/images/team1.png')}
                    alt="Boji Icon"
                    width={100}
                    height={350} />
        </SwiperSlide>
        <SwiperSlide>
        <Image
                    src={require('../.././assets/images/team1.png')}
                    alt="Boji Icon"
                    width={100}
                    height={350} />
        </SwiperSlide>
        
      </Swiper>
    </div>
  )
}

export default Media
