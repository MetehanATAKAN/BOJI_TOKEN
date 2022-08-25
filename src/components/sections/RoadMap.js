import React,{ useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react/swiper-react';
import SectionHeader from './partials/SectionHeader';

const RoadMap = () => {

  const [phase] = useState([
    {
      phaseHeader:'Phase 1',
      phaseItem: [
        '✓ Concept Design        ',
        '✓ Website Launch        ',
        '✓ Token Launch ',
        '✓ Social Media Channels ',
        '✓ Marketing Strategy ',
        '✓ Community Building ',
        '✓ Whitepaper',
      ],
      isPhaseCompleted: true,
    },
    {
      phaseHeader:'Phase 2',
      phaseItem: [
        '✓ Launch BOJI’s NFT                        ',
        '✓ RunBOJI Game Launch ',
        '✓ Tier 4 Exchange Listing ',
        '✓ Coingecko Listing ',
        '✓ Coinmarketcap Listing ',
        '✓ Audit Report ',
        '✓ Airdrop ',
        '✓ Whitepaper and Pitchdeck Upgrade ',
        '✓ PR Strategies ',
        '✓ Community AMA ',
        '✓ Social Media Presence on all continents ',
        '✓ Surprise Event',
      ],
      isPhaseCompleted: true,
    },
    {
      phaseHeader:'Phase 3',
      phaseItem: [
        'Website v2                     ',
        'Bojilogy Web3 Launch ',
        'BojiSwap Launch ',
        'BojiForce NFT Launch ',
        'Marketing Campaigns ',
        'Bojilogy Mobile Version Launch ',
        'Tier 3 Exchange Listing ',
        'Event For Charity ',
        'Airdrop ',
      ],
      isPhaseCompleted: 'continues',
    },
    {
      phaseHeader:'Phase 4',
      phaseItem: [
        'Audit Report (Certik, Hacken) ',
        'Tier2 Exchange Listing ',
        'Runboji v2 ',
        'Influencer onboarding ',
        'Bojilogy Version Upgrade ',
        'Charity Partnership',
      ],
      isPhaseCompleted: false,
    },
    {
      phaseHeader:'Phase 5',
      phaseItem: [
        'Bojiv2 NFT Collection                                ',
        'Chinese,Japanese, Russian Language option (Bojilogy) ',
        'NFT Marketplace ',
        'BojiMP ',
        'Bojilogy Version Upgrade ',
        'Tier 1 Exchange Listing ',
      ],
      isPhaseCompleted: false,
    },
    {
      phaseHeader:'Phase 6',
      phaseItem: [
        'NGO inaugural      ',
        'Metaverse Game ',
        'Roadmap v2 Release',
      ],
      isPhaseCompleted: false,
    },
    
  ])

  const sectionHeader = {
    title: 'ROADMAP',
  };

  return (
    <div id='roadmap' className='container'>
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
          768: {
            width: 768,
            slidesPerView: 2
          },

          200: {
            width: 310,
            slidesPerView: 1
          }
        }}
      >
        <div className='timeline'>
          {
            phase.map((item,index)=>(
              <SwiperSlide>
                <div className='timeline_icn' style={item.isPhaseCompleted === true ? {backgroundColor:'green'} : item.isPhaseCompleted === 'continues' ? { backgroundColor:'yellow'} : null } ></div>
                <div className='status'>
                  {
                    item.isPhaseCompleted === true
                    ? <h5> <del>{item.phaseHeader} </del> </h5>
                    : <h5> {item.phaseHeader} </h5>
                  }
                  <div className='mgt-timeline-text'>
                    <ul>
                      {
                        item.isPhaseCompleted === true
                        ?item.phaseItem.map((item,index)=>(
                          <li> <del>{item}</del> </li>
                        ))
                        :item.phaseItem.map((item,index)=>(
                          <li> {item} </li>
                        ))
                      }
                    </ul>
                  </div>
                </div>
              </SwiperSlide>
            ))
          }
          
        </div>
      </Swiper>
    </div>
  )
}

export default RoadMap