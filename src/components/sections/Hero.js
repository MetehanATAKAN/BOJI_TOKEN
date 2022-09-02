import React, { useState, useRef } from 'react';
import classNames from 'classnames';
import { SectionProps } from '../../utils/SectionProps';
import Image from '../elements/Image';
import Bounce from 'react-reveal/Bounce';
import { Row, Col, Overlay, Tooltip } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';

const propTypes = {
  ...SectionProps.types
}

const defaultProps = {
  ...SectionProps.defaults
}

const Hero = ({
  className,
  topOuterDivider,
  bottomOuterDivider,
  topDivider,
  bottomDivider,
  hasBgColor,
  invertColor,
  imageFill,
  ...props
}) => {

  const { t } = useTranslation();

  const [show, setShow] = useState(false);
  const target = useRef(null);
 
  const outerClasses = classNames(
    'hero section center-content',
    topOuterDivider && 'has-top-divider',
    bottomOuterDivider && 'has-bottom-divider',
    hasBgColor && 'has-bg-color',
    invertColor && 'invert-color',
    className
  );


  const copyAdress = async (adress) => {
    await navigator.clipboard.writeText(adress);
    await setTimeout(() => {
      setShow(false)
    }, 1500);
    await setShow(true);
  }

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
      header:'boji.shop shop',
      imageSrc: require('../../assets/images/BOJI MP.png'),
      imageAlt: 'boji.shop',
      bgColor: '#DB415E',
      backInfo:'It is a non-profit platform that sells products such as animal care, nutrition, education and accessories.'
    },
  ])



  return (
    <section
      {...props}
      className={outerClasses}

    >
      <div className="container">

        <Row className='main-row'>
          <Col md={12} lg={6} className='d-flex flex-column justify-content-between' >
            <Bounce left>
              <h3 className="mt-0 mb-12 " style={{ color: 'black' }}>
               {
                t(
                  'A Decentralized Web3 Token that Envolved into a Boji Ecosystem'
                )
               }
              </h3>
              <p className="m-0 mb-12">
               {
                t('BOJI is an organization that aims to bring all the possibilities offered by Web3 Technology to its community under one roof, using advanced blockchain-based applications. In addition, the BOJI project aims to move civilization forward by connecting real life with digital currencies, using elements such as IoT and VR-based blockchain applications.')
               }
              </p>
              <div className='button-group' style={{ marginTop: '25px', display: 'flex', justifyContent: 'space-evenly' }}>

                <button class="blob-btn">
                  {t('Buy Now')}
                  <span class="blob-btn__inner">
                    <span class="blob-btn__blobs">
                      <span class="blob-btn__blob"></span>
                      <span class="blob-btn__blob"></span>
                      <span class="blob-btn__blob"></span>
                      <span class="blob-btn__blob"></span>
                    </span>
                  </span>
                </button>

                <button class="blob-btn">
                 {t('Read Whitepaper')}
                  <span class="blob-btn__inner">
                    <span class="blob-btn__blobs">
                      <span class="blob-btn__blob"></span>
                      <span class="blob-btn__blob"></span>
                      <span class="blob-btn__blob"></span>
                      <span class="blob-btn__blob"></span>
                    </span>
                  </span>
                </button>
              </div>
              <div className='contract-adress'>
                <div >
                  <select style={{borderRadius:'100px',outline:'none'}} name="adress" id="adress">
                    <option value="BSC">BSC</option>

                  </select>
                </div>
                <div className='adress' onCopy={true} >0x1b19c6bb5ea3290dc8b4cb722dee9eea7bc7b164</div>
                <div className='copy-icon' ref={target} onClick={() => copyAdress('0x1b19c6bb5ea3290dc8b4cb722dee9eea7bc7b164')}><i className="fa-solid fa-copy"></i></div>
                <Overlay target={target.current} show={show} placement="right">
                  {(props) => (
                    <Tooltip id="overlay-example" {...props}>
                    Copied
                    </Tooltip>
                  )}
                </Overlay>
              </div>

            </Bounce>
          </Col>

          <Col md={12} lg={6} className='d-flex flex-column justify-content-between' >
            <Bounce right>
            <div className="hero-menu-box">
    {
      ecosystemItems.map(item=>(
        
        <div  className={ `menu-item ${item.header}` } style={{backgroundColor:item.bgColor}} >
          
          <span className='front' style={{display:'flex',flexDirection:'column'}}>
          <span> {item.header} </span>
          <Image
            src={item.imageSrc}
            alt={item.imageAlt}
            width={30}
            height={30}             
          />
          </span>

          <span className='back'>
              <p style={{padding:'5px'}}>
                {t(item.backInfo)}
              </p>
          </span>
        </div>
      ))
    }
    <div className='logo'>
      <img 
      src={require('../.././assets/images/mainBoji.png')} 
      alt="Boji Icon"
      />
    {/* <Image
                src={require('../.././assets/images/mainBoji.png')}
                alt="Boji Icon"
                width={400}
                height={300} /> */}
    </div>
  
  
  </div>

              {/* <Image
                src={require('../.././assets/images/mainBoji.png')}
                alt="Boji Icon"
                width={400}
                height={300} /> */}

                    <div className='coin-market d-flex justify-content-evenly'>
                      <div className='coin-button'>
                        <a href='#/'>
                        <Image
                src={require('../.././assets/images/coinMarketCap.png')}
                alt="Coin Gecko"
                width={150}
                height={100} />
                        </a>
                      </div>

                      <div className='coin-button'>
                        <a href='#/'>
                        <Image
                src={require('../.././assets/images/coinGecko.png')}
                alt="Coin Gecko"
                width={150}
                height={100} />
                        </a>
                      </div>
                    </div>
            </Bounce>
          </Col>
        </Row>

      </div>
    </section>
  );
}

Hero.propTypes = propTypes;
Hero.defaultProps = defaultProps;

export default Hero;