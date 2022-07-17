import React,{useState} from 'react';
import classNames from 'classnames';
import { SectionTilesProps } from '../../utils/SectionProps';
import Image from '../elements/Image';
import { Row, Col } from 'react-bootstrap';
import Bounce from 'react-reveal/Bounce';

const propTypes = {
  ...SectionTilesProps.types
}

const defaultProps = {
  ...SectionTilesProps.defaults
}
const FeaturesTiles = ({
  className,
  topOuterDivider,
  bottomOuterDivider,
  topDivider,
  bottomDivider,
  hasBgColor,
  invertColor,
  pushLeft,
  imageFill,
  ...props
}) => {

  const outerClasses = classNames(
    'features-tiles section',
    topOuterDivider && 'has-top-divider',
    bottomOuterDivider && 'has-bottom-divider',
    hasBgColor && 'has-bg-color',
    invertColor && 'invert-color',
    className
  );

 
  const [first, setfirst] = useState(true);
  const [second, setSecond] = useState(true);
  const [third, setThird] = useState(true);
  const [fourth, setFourth] = useState(true);
  
  return (
    <section
      {...props}
      className={outerClasses}
    >
      <div className='container about'>
       <Row>
          <Col sm={12} lg={6} >
            <Bounce left>
            <div>
              <h3 className="mt-0 mb-12">
                ABOUT BOJI COIN
              </h3>
              <p className="m-0">
                Baby Doge is cute but with a lot of BITE! $Baby Doge is a deflationary token designed to become more scarce over time. All holders of Baby Doge will earn more baby doge that is automatically sent to your wallet by simply holding Baby Doge coins in your wallet. Watch the amount of baby doge grow in your wallet as baby doge coin holders automatically receive a 5% fee from every on chain transaction that happens on the Baby Doge ecosystem. The community receives more baby doge coins from the fees generated each transaction.
              </p>

              <div className='tech-audit'>
                <Row className='tech-audit-main'>
                  <Col sm={4} md={3} >
                  <p className='font-weight-bold fs-6'>Tech-Audit</p>
                  </Col>

                  <Col sm={4} md={1} >
                  <div>
                  <i className="fa-solid fa-circle circle"></i>
                  </div>
                  </Col>
                 
                  <Col sm={4} md={3}  >
                  <div>
                    <p>
                     On Board
                    </p>
                  </div>
                  </Col>
                  <Col md={5}>

                    <div className='audit-report'>
                      <a href='https://github.com/TechRate/Smart-Contract-Audits/blob/main/July_2022/BOJI%20Full%20Smart%20Contract%20Security%20Audit.pdf' target='_blank' rel="noopener noreferrer">
                        <div>
                          <span>
                          <i className="fa-solid fa-eye"></i>
                          </span>
                          <span>
                            Audit Report
                          </span>
                        </div>
                      </a>
                    </div>
                  </Col>
                </Row>
              </div>

              {/* <div>
                <button class="blob-btn">
                  BUY ON PANCAKE SWAP
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
                  BUY UNISWAP
                  <span class="blob-btn__inner">
                    <span class="blob-btn__blobs">
                      <span class="blob-btn__blob"></span>
                      <span class="blob-btn__blob"></span>
                      <span class="blob-btn__blob"></span>
                      <span class="blob-btn__blob"></span>
                    </span>
                  </span>
                </button>
              </div> */}

            </div>
            </Bounce>
            </Col>

            <Col sm={12} lg={6} >
            <Bounce right>
            <Row>
            
                    
                      
                      <Col className='about-card'  >
                        <Bounce right>
                      <div className='about-item' onMouseMove={()=>setfirst(false)} onMouseOut={()=>setfirst(true)}>
                        <div className='about-item-content'>
                      <Image
                          src={require('./../../assets/images/burn.png')}
                          alt="Features split 01"
                          width={50}
                          height={50} />
                          <label className='about-item-info'>metehan atakan</label>
                          </div>
                      </div>
                      </Bounce>
                      </Col>
                     
                  
                <Col className='about-card'>
                <div className='about-item' onMouseMove={()=>setSecond(false)} onMouseOut={()=>setSecond(true)}>
                  <div className='about-item-content'>
                <Image
                    src={require('./../../assets/images/liquidity.png')}
                    alt="Features split 01"
                    width={50}
                    height={50} />
                    <label className='about-item-info'>metehan atakan</label>
                    </div>
                </div>
                </Col>

                <Col className='about-card'>
                <div className='about-item' onMouseMove={()=>setThird(false)} onMouseOut={()=>setThird(true)} >
                  <div className='about-item-content'>
                <Image
                    src={require('./../../assets/images/liquidity.png')}
                    alt="Features split 01"
                    width={50}
                    height={50} />
                    <label className='about-item-info'>metehan atakan</label>
                    </div>
                </div>
                </Col>

                <Col className='about-card'>
                <div className='about-item'  onMouseMove={()=>setFourth(false)} onMouseOut={()=>setFourth(true)}>
                  <div className='about-item-content'>
                <Image
                    src={require('./../../assets/images/charity.png')}
                    alt="Features split 01"
                    width={50}
                    height={50} />
                    <label className='about-item-info'>metehan atakan</label>
                    </div>
                </div>
                </Col>
                
                    {
                      first === false
                      ?
                      <Bounce left>
                      <div className='about-card-info'>
                      First card
                    </div>
                    </Bounce>
                      :null
                    }
                    {
                      second === false
                      ?
                      <Bounce left>
                      <div className='about-card-info'>
                      Second card
                    </div>
                    </Bounce>
                      :null
                    }
                    {
                      third === false
                      ?
                      <Bounce left>
                      <div className='about-card-info'>
                      Third card
                    </div>
                    </Bounce>
                      :null
                    }
                    {
                      fourth === false
                      ?
                      <Bounce left>
                      <div className='about-card-info'>
                      Fourth card
                    </div>
                    </Bounce>
                      :null
                    }
                
              {/* <Col sm={12} className='about-item'>
                <div className='icon'>
                  <Image
                    src={require('./../../assets/images/burn.png')}
                    alt="Features split 01"
                    width={50}
                    height={50} />
                </div>

                <div className='about-item-contain'>
                  <div className='about-item-contain-header'>AUTO BURN</div>
                  <span>The dead wallet holds 45%+ of the supply. That means out of the 5% of the reflections 45%+ of them will be distributed to the dead wallet each transaction. Thus, coins are burned with each on chain transaction.</span>
                </div>
              </Col>

              <Col sm={12} className='about-item'>
                <div className='icon'>
                  <Image
                    src={require('./../../assets/images/liquidity.png')}
                    alt="Features split 01"
                    width={50}
                    height={50} />
                </div>

                <div className='about-item-contain'>
                  <div className='about-item-contain-header'>AUTO-REFLECTIONS</div>
                  <span>5% fee of each transaction is redistributed to token holders. That means you can earn more Baby Doge Coins by holding them in your wallet. (centralized exchanges/wallets may not apply tokenomics)</span>
                </div>
              </Col>

              <Col sm={12} className='about-item'>
                <div className='icon'>
                  <Image
                    src={require('./../../assets/images/liquidity.png')}
                    alt="Features split 01"
                    width={50}
                    height={50} />
                </div>

                <div className='about-item-contain'>
                  <div className='about-item-contain-header'>LOCKED LIQUIDITY</div>
                  <span>Majority of initial LP tokens locked & some burned. (Newly generated LP tokens from the 5% LP fees are not)</span>
                </div>
              </Col>

              <Col  sm={12} className='about-item'>
                <div className='icon'>
                  <Image
                    src={require('./../../assets/images/charity.png')}
                    alt="Features split 01"
                    width={50}
                    height={50} />
                </div>

                <div className='about-item-contain'>
                  <div className='about-item-contain-header'>CHARITY WALLET</div>
                  <span>We have a designated charity wallet that receives redistributions that are used to support our charity partners.</span>
                </div>
              </Col> */}
            </Row>
            </Bounce>
            </Col>
          </Row>
         
      </div>
    </section>
  );
}

FeaturesTiles.propTypes = propTypes;
FeaturesTiles.defaultProps = defaultProps;

export default FeaturesTiles;