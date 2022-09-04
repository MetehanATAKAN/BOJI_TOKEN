import React , { useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react/swiper-react';

// Import Swiper styles
import 'swiper/swiper.min.css';
import "swiper/modules/pagination/pagination.min.css";
import "swiper/modules/navigation/navigation.min.css";
// import required modules
import { Navigation } from "swiper";


const Video = () => {

    const [video] = useState([
        {
            videoEmbed:<iframe width="90%" height="100%" src="https://www.youtube.com/embed/4Jf325QzWIM" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        },
        {
            videoEmbed:<iframe width="90%" height="100%" src="https://www.youtube.com/embed/KLncsjcbPRs" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        },
        {
            videoEmbed:<iframe width="90%" height="100%" src="https://www.youtube.com/embed/PDboek8yoyU" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        },
        {
            videoEmbed:<iframe width="90%" height="100%" src="https://www.youtube.com/embed/B8RGVU3qBbI" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        }
    ]);

  return (
    <div className='mt-3'>
        <Swiper 
        slidesPerView={1}
        spaceBetween={0}
        centeredSlides={true}
        // pagination={{
        //   clickable: true,
        //   type: 'custom'
        // }}
        navigation={true}
        modules={[Navigation]}
        loop={true}
        className="mySwiper"
        >
            {
                video.map(item=>(
                    <SwiperSlide>
                        {item.videoEmbed}
                    </SwiperSlide>
                ))
            }

        </Swiper>

    </div>
  )
}

export default Video