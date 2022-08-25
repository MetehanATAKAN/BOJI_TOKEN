import React, { useState} from 'react'
import Image from '../elements/Image';
import SectionHeader from './partials/SectionHeader'

const Ecosystem = () => {

  const [ecosystemItems] = useState([
    {
      id:1,
      header:'BOJI TOKEN',
      imageSrc: require('../../assets/images/BOJI TOKEN.png'),
      imageAlt: 'BOJI TOKEN',
      bgColor: '#E88DA4',
      backInfo:'Cryptocurrency with a key role in the ecosystem. All units of BECO will be integrated with the Boji Token.'
    },
    {
      id:2,
      header:'Boji Wallet',
      imageSrc: require('../../assets/images/SWAP.png'),
      imageAlt: 'SWAP',
      bgColor: '#EFB42D',
      backInfo:'It is a decentralized platform where BOJI Token holders can buy and sell tokens, stake and have a referral system.'
    },
    {
      id:3,
      header:'BojiForce NFT',
      imageSrc: require('../../assets/images/NFT.png'),
      imageAlt: 'NFT',
      bgColor: '#99BF55',
      backInfo:'Holders who own a piece from the BojiForce collection will receive 1/2x the standard stake cap. In this way, their income from staking will be 50% more.'
    },
    {
      id:4,
      header:'Bojify',
      imageSrc: require('../../assets/images/BOJILOGY.png'),
      imageAlt: 'BOJILOGY',
      bgColor: '#6FC7EA',
      backInfo:'End users will be able to produce content suitable for the "Bojify" theme themselves, and earn tokens as they are read and shown. Payments are made with BojiToken.'
    },
    {
      id:5,
      header:'Charity',
      imageSrc: require('../../assets/images/CHARITY(1).png'),
      imageAlt: 'CHARITY',
      bgColor: '#4426BE',
      backInfo:'2% of the Boji Token trading volume is funded with the aim of improving the living conditions of animals.'
    },
    {
      id:6,
      header:'Play to Earn',
      imageSrc: require('../../assets/images/PLAY TO EARN.png'),
      imageAlt: 'PLAY TO EARN',
      bgColor: '#5500B5',
      backInfo:'It is a platform where Boji Token holders can earn tokens while playing games. In the first stage, this game is planned as a game that will take place in the Metaverse universe.'
    },
    {
      id:7,
      header:'Boji v2 NFT',
      imageSrc: require('../../assets/images/V2 NFT.png'),
      imageAlt: 'V2 NFT',
      bgColor: '#A28BEE',
      backInfo:'Holders who own a piece from the Bojiv2 NFT collection will have the right to a 30% discount on the products offered for sale on the e-commerce site. It will also be entitled to discounts on some veterinary and social activities in certain cities of the world.'
    },
    {
      id:8,
      header:'BOJI TOKEN',
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
    <div id='ecosystem' className="menu-container">

      
  <div className="circle-menu-box">
    {
      ecosystemItems.map(item=>(
        
        <a href='/#' className='menu-item' style={{backgroundColor:item.bgColor}} >
          
          <div className='front' style={{display:'flex',flexDirection:'column'}}>
          <span> {item.header} </span>
          <Image
            src={item.imageSrc}
            alt={item.imageAlt}
            width={30}
            height={30}             
          />
          </div>

          <div className='back'>
              <p style={{padding:'5px'}}>
                {item.backInfo}
              </p>
          </div>
        </a>
      ))
    }
  
    {/* <a href='#/' className="menu-item">
      <span className="fa fa-home" />
    </a>
    <a href='#/' className="menu-item">
      <span className="fa fa-tag" />
    </a>
    <a href='#/' className="menu-item">
      <span className="fa fa-info-circle" />
    </a>
    <a href='#/' className="menu-item">
      <span className="fa fa-comments" />
    </a>
    <a href='#/' className="menu-item">
      <span className="fa fa-folder-open" />
    </a>
    <a href='#/' className="menu-item">
      <span className="fa fa-group" />
    </a>
    <a href='#/' className="menu-item">
      <span className="fa fa-newspaper-o" />
    </a>
    <a href='#/' className="menu-item">
      <span className="fa fa-sitemap" />
    </a> */}
  </div>
</div>

  </>
  )
}

export default Ecosystem