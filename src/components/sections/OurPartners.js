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
          itemImage:require('../../assets/images/our parterns/bscscan.png'),
          imageAlt:'BSCSCAN',
          href:'https://bscscan.com/token/0x1b19c6bb5ea3290dc8b4cb722dee9eea7bc7b164'
        },
        {
          itemImage:require('../../assets/images/our parterns/cmk.png'),
          imageAlt:'COIN MARKET CAP',
          href:'https://coinmarketcap.com/currencies/boji/'
        },
        {
          itemImage:require('../../assets/images/our parterns/coingecko.png'),
          imageAlt:'COIN GECKO',
          href:'https://www.coingecko.com/tr/coins/boji'
        },
        {
          itemImage:require('../../assets/images/our parterns/azbit.png'),
          imageAlt:'AZBIT',
          href:'https://azbit.com/exchange/BOJI_USDT'
        },
        {
          itemImage:require('../../assets/images/our parterns/coinbrain.png'),
          imageAlt:'COINBRAIN',
          href:'https://coinbrain.com/coins/bnb-0x1b19c6bb5ea3290dc8b4cb722dee9eea7bc7b164'
        },
      ])
    
  return (
    <div id='ourpartners' className='container'>
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
      breakpoints: {
        992 : {
          type:'loop',
          perPage:'3'
        },
        772 : {
          type:'loop',
          perPage:'2'
        },
      }
    }}
    extensions={{ AutoScroll }}

  >

    {
      slideItem.map((item,index)=>(
        <SplideSlide>
          <a href={item.href} target='_blank' rel="noopener noreferrer">
          <Image
                src={item.itemImage}
                alt={item.imageAlt}
                width={150}
                height={150} />
                </a>
        </SplideSlide>
      ))
    }
  </Splide>
  </div>
  )
}

export default OurPartners