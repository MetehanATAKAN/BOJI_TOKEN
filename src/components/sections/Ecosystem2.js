import React, {useState} from 'react'
import Image from '../elements/Image';
import SectionHeader from './partials/SectionHeader';

const Ecosystem2 = () => {

    const [ecosystemItems] = useState([
        {
          id:1,
          header:'BOJI TOKEN',
          class:'BOJI TOKEN',
          imageSrc: require('../../assets/images/BOJI TOKEN.png'),
          imageAlt: 'BOJI TOKEN',
          bgColor: '#E88DA4',
          backInfo:'Cryptocurrency with a key role in the ecosystem. All units of BECO will be integrated with the Boji Token.'
        },
        {
          id:2,
          header:'Bojilogy',
          class: 'Boji Wallet',
          imageSrc: require('../../assets/images/SWAP.png'),
          imageAlt: 'SWAP',
          bgColor: '#EFB42D',
          backInfo:'End users will be able to produce content suitable for the "Bojify" theme themselves, and earn tokens as they are read and shown. Payments are made with BojiToken.'
        },
        {
          id:3,
          header:'BojiForce NFT',
          class:'NFT',
          imageSrc: require('../../assets/images/NFT.png'),
          imageAlt: 'NFT',
          bgColor: '#99BF55',
          backInfo:'Holders who own a piece from the BojiForce collection will receive 1/2x the standard stake cap. In this way, their income from staking will be 50% more.'
        },
        {
          id:4,
          header:'Boji Swap',
          class:'Bojify',
          imageSrc: require('../../assets/images/BOJILOGY.png'),
          imageAlt: 'BOJILOGY',
          bgColor: '#6FC7EA',
          backInfo:'It is a decentralized platform where BOJI Token holders can buy and sell tokens, stake and have a referral system.'
        },
        {
          id:5,
          header:'Charity',
          class:'Charity',
          imageSrc: require('../../assets/images/CHARITY(1).png'),
          imageAlt: 'CHARITY',
          bgColor: '#4426BE',
          backInfo:'2% of the Boji Token trading volume is funded with the aim of improving the living conditions of animals.'
        },
        {
          id:6,
          header:'Play to Earn',
          class:'Earn',
          imageSrc: require('../../assets/images/PLAY TO EARN.png'),
          imageAlt: 'PLAY TO EARN',
          bgColor: '#5500B5',
          backInfo:'It is a platform where Boji Token holders can earn tokens while playing games. In the first stage, this game is planned as a game that will take place in the Metaverse universe.'
        },
        {
          id:7,
          header:'Boji v2 NFT',
          class:'v2',
          imageSrc: require('../../assets/images/V2 NFT.png'),
          imageAlt: 'V2 NFT',
          bgColor: '#A28BEE',
          backInfo:'Holders who own a piece from the Bojiv2 NFT collection will have the right to a 30% discount on the products offered for sale on the e-commerce site. It will also be entitled to discounts on some veterinary and social activities in certain cities of the world.'
        },
        {
          id:8,
          header:'BOJIMP',
          class:'shop',
          imageSrc: require('../../assets/images/BOJI MP.png'),
          imageAlt: 'boji.shop',
          bgColor: '#DB415E',
          backInfo:'It is a non-profit platform that sells products such as animal care, nutrition, education and accessories.'
        },
      ])
    
      const sectionHeader = {
        title: 'ECOSYSTEM',
      };

  return (
    <>
      <SectionHeader data={sectionHeader} className="center-content" />

      <div className='container'>

<div className='box'>
        {
            ecosystemItems.map(item=>(
                <div class="flip-card">
  <div className={`menu-item flip-card-inner ${item.class}`} style={{backgroundColor:item.bgColor}}>
    <div class="flip-card-front">
     
    <span>{item.header}</span>
                <Image
            src={item.imageSrc}
            alt={item.imageAlt}
            width={30}
            height={30} />
     
    </div>
    <div class="flip-card-back">
    <p>
               {item.backInfo}
               </p>
    </div>
  </div>
</div>
            ))
        }
        </div>
    </div>
    </>
    
  )
}

export default Ecosystem2