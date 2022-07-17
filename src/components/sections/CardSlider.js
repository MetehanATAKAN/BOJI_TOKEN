import React from 'react'
import { Splide, SplideSlide } from '@splidejs/react-splide';
import { AutoScroll } from "@splidejs/splide-extension-auto-scroll";
import "@splidejs/splide/dist/css/splide.min.css";
import Image from '../elements/Image';

const CardSlider = () => {
  return (
    <div className='container'>
       <Splide
      options={{
        type: "loop",
        gap: "10px",
        drag: "free",
        arrows: false,
        pagination: false,
        perPage: 5,
        autoScroll: {
          pauseOnHover: true,
          pauseOnFocus: false,
          rewind: false,
          speed: 1
        },
      }}
      extensions={{ AutoScroll }}
    >
      <SplideSlide aria-label="My Favorite Images">
      <Image
                  src={require('../../assets/images/nasdaq.png')}
                  alt="Features split 01"
                  width={150}
                  height={150} />
      </SplideSlide>

      <SplideSlide>
      <Image
                  src={require('../../assets/images/newyork.png')}
                  alt="Features split 02"
                  width={150}
                  height={150} />
      </SplideSlide>

      <SplideSlide>
      <Image
                  src={require('../../assets/images/cnbc.png')}
                  alt="Features split 03"
                  width={150}
                  height={150} />
      </SplideSlide>

      <SplideSlide>
      <Image
                  src={require('../../assets/images/business-inseder.png')}
                  alt="Features split 02"
                  width={150}
                  height={150} />
      </SplideSlide>
      
    </Splide>
    </div>
  )
}

export default CardSlider

