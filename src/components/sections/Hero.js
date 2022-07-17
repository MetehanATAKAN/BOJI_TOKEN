import React, { useState, useRef } from 'react';
import classNames from 'classnames';
import { SectionProps } from '../../utils/SectionProps';
import ButtonGroup from '../elements/ButtonGroup';
import Button from '../elements/Button';
import Image from '../elements/Image';
import Modal from '../elements/Modal';
import Roll from 'react-reveal/Roll';
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
  const [adressItem, setAdressItem] = useState([
    { value: 'BSC', label: 'BSC' }
  ])



  const outerClasses = classNames(
    'hero section center-content',
    topOuterDivider && 'has-top-divider',
    bottomOuterDivider && 'has-bottom-divider',
    hasBgColor && 'has-bg-color',
    invertColor && 'invert-color',
    className
  );

  const innerClasses = classNames(
    'hero-inner section-inner',
    topDivider && 'has-top-divider',
    bottomDivider && 'has-bottom-divider'
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
          <Col md={12} lg={6} >
            <Bounce left>
              <h3 className="mt-0 mb-12 " style={{ color: 'black' }}>
                The World's First Light-Speed Boji Coin with Zero Fees and Smart Contracts.
              </h3>
              <p className="m-0 mb-12">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua — Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
              </p>
              <div className='button-group' style={{ marginTop: '25px', display: 'flex', justifyContent: 'space-evenly' }}>

                <button class="blob-btn">
                  {/* (t{' Buy Now'}) */}
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
                  Read Whitepaper
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
                  <select name="adress" id="adress">
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

          <Col md={12} lg={6}>
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