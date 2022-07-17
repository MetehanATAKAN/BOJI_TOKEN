import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react/swiper-react';
import SectionHeader from './partials/SectionHeader';

const RoadMap = () => {

  const sectionHeader = {
    title: 'ROADMAP',
  };

  return (
    <div className='container'>
       <SectionHeader data={sectionHeader} className="center-content" />
      <Swiper
        className='swiper-container timelines-content'
        slidesPerView={3}
        slidesPerGroup={1}
        slidesOffsetBefore={30}
        slidesOffsetAfter={30}
        centerInsufficientSlides={true}
        loop={false}
        speed={500}
        centeredSlides={false}
        centeredSlidesBounds={true}
        breakpoints={{
          // 992: {
          //   width:992,
          //   slidesPerView:3
          // },
          768 :{
            width:768,
            slidesPerView:2
          },

          200: {
            width:310,
            slidesPerView:1
          }
        }}
      >
        <div className='timeline'>
          <SwiperSlide >
            {/* <div className="timestamp"> <span className="date">Phase 1</span> </div> */}
            <div className="timeline_icn"></div>
            <div className="status">
              <h5>Phase 1</h5>
              <div className="mgt-timeline-text">
                
                  <ul>
                  <li>Concept Design</li>
                  <li>Website Launch</li>
                  <li>Token Launch</li>
                  <li>Social Media Channels</li>
                  <li>Marketing Strategy</li>
                  <li>Community Building</li>
                  <li>Whitepaper</li>
                  </ul>
               
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            {/* <div className="timestamp"> <span className="date">Phase 2</span> </div> */}
            <div className="timeline_icn"></div>
            <div className="status">
              <h5>Phase 2</h5>
              <div className='mgt-timeline-text'>
             
                <ul>
                <li> Launch BOJI’s NFT</li>
                <li> RunBOJI Game Launch</li>
                <li> Exchange Listing</li>
                <li> Coingecko Listing</li>
                <li> Coinmarketcap Listing</li>
                <li>Various Ads</li>
                <li>Social Media Presence on all continents</li>
                <li>Surprise Event</li>
                </ul>
              
                </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            {/* <div className="timestamp"> <span className="date">Phase 3</span> </div> */}
            <div className="timeline_icn"></div>
            <div className="status">
              <h5>Phase 3</h5>
              <div className='mgt-timeline-text'>
                <ul>
                <li>Tier 2 Exchange listing</li>
                <li>Certik Audit</li>
                <li>BOJI Swap</li>
                <li>Marketing Campaigns</li>
                </ul>
                </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            {/* <div className="timestamp"> <span className="date">Phase 4</span> </div> */}
            <div className="timeline_icn"></div>
            <div className="status">
              <h5>Phase 4</h5>
              <div className='mgt-timeline-text'>
              <ul >
                <li>Website v2</li>
                <li>Influencer onboarding</li>
                <li>Launch ERC20 token</li>
                <li>Tier 2 Exchange Listing</li>
                <li>Metaverse Game</li>
                </ul>
                </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            {/* <div className="timestamp"> <span className="date">Phase 5</span> </div> */}
            <div className="timeline_icn"></div>
            <div className="status">
              <h5>Phase 5</h5>
              <div className='mgt-timeline-text'>
              <ul>
                <li>NFT Marketplace</li>
              </ul>
              </div>
            </div>
          </SwiperSlide>
          {/* <SwiperSlide className='swiper-end'>
            <div className="status">
              <div className="icn-end"></div>
            </div>
          </SwiperSlide> */}
        </div>
      </Swiper>
    </div>
  )
}

export default RoadMap