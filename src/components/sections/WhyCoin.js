import React from 'react';
import classNames from 'classnames';
import { SectionSplitProps } from '../../utils/SectionProps';
import SectionHeader from './partials/SectionHeader';
import Image from '../elements/Image';
import { Swiper, SwiperSlide } from 'swiper/react/swiper-react';
import { Pagination, Autoplay } from "swiper";
import { Row, Col } from 'react-bootstrap';
const propTypes = {
  ...SectionSplitProps.types
}

const defaultProps = {
  ...SectionSplitProps.defaults
}

const WhyCoin = ({
  className,
  topOuterDivider,
  bottomOuterDivider,
  topDivider,
  bottomDivider,
  hasBgColor,
  invertColor,
  invertMobile,
  invertDesktop,
  alignTop,
  imageFill,
  ...props
}) => {

  const outerClasses = classNames(
    'features-split section',
    topOuterDivider && 'has-top-divider',
    bottomOuterDivider && 'has-bottom-divider',
    hasBgColor && 'has-bg-color',
    invertColor && 'invert-color',
    className
  );


  const sectionHeader = {
    title: 'WHY BOJI?',
  };

  return (
    <section
      {...props}
      className={outerClasses}
    >
      <div className="container">
        <SectionHeader data={sectionHeader} className="center-content" />


        <Swiper
          slidesPerView={1}
          spaceBetween={10}
          centeredSlides={true}
          pagination={{
            clickable: true,
            type: 'custom'
          }}
          modules={[Pagination, Autoplay]}
          loop={true}
          className="mySwiper"
          allowSlideNext={true}
          allowTouchMove={true}
          // autoplay={{
          //   delay: 2500,
          //   disableOnInteraction: false,
          //   pauseOnMouseEnter: true,
          // }}
        >
        
            <SwiperSlide>
              <Row>
                <Col sm={12} md={5}>
                 
                    <Image
                      src={require('./../../assets/images/kishu.png')}
                      alt="Features split 02"
                      width={300}
                      height={300} />
                 </Col>

                  <Col sm={12} md={7} className='m-auto'>
                    <div >
                      <h3 >
                        Instant Usage Rewards
                      </h3>
                      <p>
                        For every active user transaction a 2% KISHU reward is granted to holders'; decentralized wallets only, fostering a healthy distributed network and community usage. The more KISHU is actively used, the more rewards are granted!
                      </p>
                    </div>
                    </Col>
                
              </Row>
            </SwiperSlide>


          
            <SwiperSlide>
              <Row>
                <Col sm={12} md={5}>
                  
                    <Image
                      src={require('./../../assets/images/kishu.png')}
                      alt="Features split 02"
                      width={300}
                      height={300} />
               
                </Col>

                <Col sm={12} md={7} className='m-auto'>
                 

                    <div>
                      <h3 >
                        Community Powered
                      </h3>
                      <p>
                        BOJI is fully decentralized and owned by its fun, vibrant community. Our enthusiast volunteers welcome and embrace diverse perspectives to build KISHU into the best community in crypto.
                      </p>
                    </div>
                  
                </Col>
              </Row>
            </SwiperSlide>
          
        </Swiper>

      </div>
    </section>
  );
}

WhyCoin.propTypes = propTypes;
WhyCoin.defaultProps = defaultProps;

export default WhyCoin;