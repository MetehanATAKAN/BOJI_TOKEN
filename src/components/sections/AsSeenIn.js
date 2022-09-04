import React, { useState } from 'react'
import { Splide, SplideSlide } from '@splidejs/react-splide';
import { AutoScroll } from "@splidejs/splide-extension-auto-scroll";
import "@splidejs/splide/dist/css/splide.min.css";
import Image from '../elements/Image';
import SectionHeader from './partials/SectionHeader';

const AsSeenIn = () => {


  const [slideItem] = useState([
    {
      itemHref:'https://www.dha.com.tr/english/phenomenal-dog-boji-turned-into-cryptocurrency-boji-token-2098215',
      itemImage:require('../../assets/images/as seen in/dha.png'),
      imageAlt:'DHA',
      country:'other'
    },
    // {
    //   itemHref:'https://www.youtube.com/watch?v=4Jf325QzWIM',
    //   itemImage:require('../../assets/images/kanald.png'),
    //   imageAlt:'YOUTUBE',
    //   country:'other'
    // },
    {
      itemHref:'https://mobile.twitter.com/BojiTr/status/1554428637776060417',
      itemImage:require('../../assets/images/as seen in/fortune.png'),
      imageAlt:'FORTUNE',
      country:'other'
    },
    {
      itemHref:'https://finance.yahoo.com/news/boji-token-emerges-leading-crypto-150000247.html',
      itemImage:require('../../assets/images/as seen in/yahoo.png'),
      imageAlt:'YAHOO',
      country:'other'
    },
    {
      itemHref:'https://www.benzinga.com/pressreleases/22/07/g28001561/boji-token-emerges-as-the-leading-crypto-community-in-istanbul-that-works-for-animal-welfare',
      itemImage:require('../../assets/images/as seen in/benzinga.png'),
      imageAlt:'BENZİNGA',
      country:'other'
    },
    {
      itemHref:'https://www.globenewswire.com/en/news-release/2022/07/08/2476673/0/en/Boji-Token-emerges-as-the-leading-crypto-community-in-Istanbul-that-works-for-animal-welfare.html',
      itemImage:require('../../assets/images/as seen in/globalnewswire.png'),
      imageAlt:'GLOBAL NEWSWIRE',
      country:'other'
    },
    // {
    //   itemHref:'https://www.hurriyetdailynews.com/istanbuls-famous-stray-dog-boji-becomes-cryptocurrency-175282',
    //   itemImage:require('../../assets/images/as seen in/hurriyetDaily.png'),
    //   imageAlt:'HURRIYET DAILY NEWS',
    //   country:'other'
    // },
    {
      itemHref:'https://www.cumhuriyet.com.tr/yasam/fenomen-kopek-boji-kripto-paraya-donustu-1955997',
      itemImage:require('../../assets/images/as seen in/cunhuriyet.png'),
      imageAlt:'CUMHURIYET',
      country:'tr'
    },
    {
      itemHref:'https://coin-turk.com/istanbulun-fenomen-kopegi-boji-kripto-paraya-donustu-iyilik-perisi',
      itemImage:require('../../assets/images/as seen in/cointurk.png'),
      imageAlt:'COIN TURK',
      country:'tr'
    },
    {
      itemHref:'https://www.ntv.com.tr/ekonomi/fenomen-kopek-boji-kripto-projesiyle-iyilige-oncu-oluyor,wv9-l_DOOUqGr7I9UsC2Bg',
      itemImage:require('../../assets/images/as seen in/ntv.png'),
      imageAlt:'NTV',
      country:'tr'
    },
    {
      itemHref:'https://nftcable.io/news/istanbuls-top-crypto-community-that-promotes-animal-welfare-is-boji-token/',
      itemImage:require('../../assets/images/as seen in/ntfcable.png'),
      imageAlt:'NFT CABLE',
      country:'other'
    },
  ])

  
  const sectionHeader = {
    title: 'AS SEEN IN',
  };


  return (
    <div id='asSeenIn' className='container'>
      <SectionHeader data={sectionHeader} className="center-content"  />
       <Splide
      options={{
        type:'loop',
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
          <SplideSlide key={index}>
            <a href={item.itemHref} target={'_blank'}  rel="noopener noreferrer" >
              <Image 
              src={item.itemImage} 
              alt={item.imageAlt}
              width={150}
              height={150} 
              />
            </a>
          </SplideSlide>
        ))
      }
    </Splide>
    </div>
  )
}

export default AsSeenIn

