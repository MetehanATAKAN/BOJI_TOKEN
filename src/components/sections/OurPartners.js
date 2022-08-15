import React , { useState} from 'react'
import { Splide, SplideSlide } from '@splidejs/react-splide';
import { AutoScroll } from "@splidejs/splide-extension-auto-scroll";
import "@splidejs/splide/dist/css/splide.min.css";
import Image from '../elements/Image';
import SectionHeader from './partials/SectionHeader';

const OurPartners = () => {

    const sectionHeader = {
        title: 'OUR PARTNERS',
      };

      const [slideItem] = useState([
        {
          itemImage:require('../../assets/images/bscscan.svg'),
          imageAlt:'BSCSCAN',
        },
        {
          itemImage:require('../../assets/images/coinMarketCap.png'),
          imageAlt:'COIN MARKET CAP',
        },
        {
          itemImage:require('../../assets/images/coinGecko.png'),
          imageAlt:'COIN GECKO',
        },
        {
          itemImage:require('../../assets/images/azbit.png'),
          imageAlt:'AZBIT',
        },
      ])
    
  return (
    <div className='container'>
    <SectionHeader data={sectionHeader} className="center-content"  />
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

    {
      slideItem.map((item,index)=>(
        <SplideSlide>
          <Image
                src={item.itemImage}
                alt={item.imageAlt}
                width={150}
                height={150} />
        </SplideSlide>
      ))
    }
  </Splide>
  </div>
  )
}

export default OurPartners