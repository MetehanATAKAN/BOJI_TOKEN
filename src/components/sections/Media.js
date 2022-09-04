import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react/swiper-react';
import Image from '../elements/Image';
// Import Swiper styles
import 'swiper/swiper.min.css';
import "swiper/modules/pagination/pagination.min.css";
// import required modules
import { Pagination } from "swiper";
import SectionHeader from './partials/SectionHeader';
import Video from './Video';

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
        breakpoints={{
          998:{
            slidesPerView:4
          },
          762:{
            slidesPerView:2
          },
          200:{
            slidesPerView:1
          }
        }}
      >
        <SwiperSlide>
        <Image
                    src={require('../.././assets/images/media/media1.png')}
                    alt="Boji Icon"
                    width={100}
                    height={600} />
        </SwiperSlide>
        <SwiperSlide>
        <Image
                    src={require('../.././assets/images/media/media2.png')}
                    alt="Boji Icon"
                    width={100}
                    height={350} />
        </SwiperSlide>
        <SwiperSlide>
        <Image
                    src={require('../.././assets/images/media/media3.png')}
                    alt="Boji Icon"
                    width={100}
                    height={350} />
        </SwiperSlide>
        <SwiperSlide>
        <Image
                    src={require('../.././assets/images/media/media4.png')}
                    alt="Boji Icon"
                    width={100}
                    height={350} />
        </SwiperSlide>
        <SwiperSlide>
        <Image
                    src={require('../.././assets/images/media/media5.png')}
                    alt="Boji Icon"
                    width={100}
                    height={350} />
        </SwiperSlide>
        <SwiperSlide>
        <Image
                    src={require('../.././assets/images/media/media6.png')}
                    alt="Boji Icon"
                    width={100}
                    height={350} />
        </SwiperSlide>
        <SwiperSlide>
        <Image
                    src={require('../.././assets/images/media/media8.png')}
                    alt="Boji Icon"
                    width={100}
                    height={350} />
        </SwiperSlide>
        <SwiperSlide>
        <Image
                    src={require('../.././assets/images/media/media9.png')}
                    alt="Boji Icon"
                    width={100}
                    height={350} />
        </SwiperSlide>
        
      </Swiper>

      <Video/>
    </div>
  )
}

export default Media
