import React,{ useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react/swiper-react';
import SectionHeader from './partials/SectionHeader';

const RoadMap = () => {

  const [phase] = useState([
    {
      phaseHeader:'Phase 1',
      phaseItem: [
        {name:'✓ Concept Design',completed:true},
        {name:'✓ Website Launch',completed:true},
        {name:'✓ Token Launch ',completed:true},
        {name:'✓ Social Media Channels ',completed:true},
        {name:'✓ Marketing Strategy ',completed:true},
        {name:'✓ Community Building ',completed:true},
        {name:'✓ Whitepaper',completed:true}
      ],
      isPhaseCompleted: true,
    },
    {
      phaseHeader:'Phase 2',
      phaseItem: [
        {name:'✓ Launch BOJI’s NFT',completed:true},
        {name:'✓ RunBOJI Game Launch ',completed:true},
        {name:'✓ Tier 4 Exchange Listing ',completed:true},
        {name:'✓ Coingecko Listing ',completed:true},
        {name:'✓ Coinmarketcap Listing ',completed:true},
        {name:'✓ Audit Report ',completed:true},
        {name:'✓ Airdrop ',completed:true},
        {name:'✓ PR Strategies ',completed:true},
        {name:'✓ Community AMA ',completed:true},
        {name:'✓ Social Media Presence on all continents ',completed:true},
        {name:'✓ Surprise Event',completed:true}
      ],
      isPhaseCompleted: true,
    },
    {
      phaseHeader:'Phase 3',
      phaseItem: [
        {name:'✓ Website v2',completed:true},
        {name:'Pitchdeck Upgrade',completed:false},
        {name:'Whitepaper v2',completed:false},
        {name:'BojiSwap Launch ',completed:false},
        {name:'BojiForce NFT Launch ',completed:false},
        {name:'Bojilogy Web3 Launch ',completed:false},
        {name:'Marketing Campaigns ',completed:false},
        {name:'Bojilogy Mobile Version Launch ',completed:false},
        {name:'Tier 3 Exchange Listing ',completed:false},
        {name:'Event For Charity ',completed:false},
        {name:'Airdrop ',completed:false}
      ],
      isPhaseCompleted: 'continues',
    },
    {
      phaseHeader:'Phase 4',
      phaseItem: [
        {name:'Audit Report (Certik, Hacken) ',completed:false},
        {name:'Tier2 Exchange Listing ',completed:false},
        {name:'Runboji v2 ',completed:false},
        {name:'Influencer onboarding ',completed:false},
        {name:'Bojilogy Version Upgrade ',completed:false},
        {name:'Charity Partnership',completed:false}
      ],
      isPhaseCompleted: false,
    },
    {
      phaseHeader:'Phase 5',
      phaseItem: [
        {name:'Bojiv2 NFT Collection ',completed:false},
        {name:'Chinese,Japanese, Russian Language option (Bojilogy) ',completed:false},
        {name:'NFT Marketplace ',completed:false},
        {name:'BojiMP ',completed:false},
        {name:'Bojilogy Version Upgrade ',completed:false},
        {name:'Tier 1 Exchange Listing ',completed:false},
      ],
      isPhaseCompleted: false,
    },
    {
      phaseHeader:'Phase 6',
      phaseItem: [
        {name:'NGO inaugural ',completed:false},
        {name:'Metaverse Game ',completed:false},
        {name:'Roadmap v2 Release',completed:false},
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
                        item.phaseItem.map((item,index)=>(
                          item.completed === false
                          ? <li> {item.name} </li>
                          :<li> <del>{item.name}</del> </li>
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