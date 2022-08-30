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

              <Image
                src={require('../.././assets/images/mainBoji.png')}
                alt="Boji Icon"
                width={400}
                height={300} />

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