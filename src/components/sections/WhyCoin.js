import React from 'react';
import classNames from 'classnames';
import { SectionSplitProps } from '../../utils/SectionProps';
import SectionHeader from './partials/SectionHeader';
import Image from '../elements/Image';
import Roll from 'react-reveal/Roll';
import { Swiper, SwiperSlide } from 'swiper/react/swiper-react';
import { Pagination,Autoplay } from "swiper";

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

  const innerClasses = classNames(
    'features-split-inner section-inner',
    topDivider && 'has-top-divider',
    bottomDivider && 'has-bottom-divider'
  );

  const splitClasses = classNames(
    'split-wrap',
    invertMobile && 'invert-mobile',
    invertDesktop && 'invert-desktop',
    alignTop && 'align-top'
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
        <div className={innerClasses}>
          <SectionHeader data={sectionHeader} className="center-content" />
          <div className={splitClasses}>

            <Swiper
              slidesPerView={1}
              spaceBetween={10}
              centeredSlides={true}
              pagination={{
                clickable: true,
                type: 'custom'
              }}
              modules={[Pagination,Autoplay]}
              loop={true}
              className="mySwiper"
              allowSlideNext={true}
              allowTouchMove={true}
              autoplay={{
                delay:2500,
                disableOnInteraction:false,
                pauseOnMouseEnter:true,
              }}
            >

              <SwiperSlide>
                <div className="split-item">
                  <div className={
                    classNames(
                      'split-item-image center-content-mobile reveal-from-bottom',
                      imageFill && 'split-item-image-fill'
                    )}
                    data-reveal-container=".split-item">
                    <Image
                      src={require('./../../assets/images/kishu.png')}
                      alt="Features split 02"
                      width={528}
                      height={396} />
                  </div>
                  <div className="split-item-content center-content-mobile reveal-from-right" data-reveal-container=".split-item">
                    {/* <div className="text-xxs text-color-primary fw-600 tt-u mb-8">
                  Lightning fast workflow
                  </div> */}
                    <div className='split-item-info'>
                      <h3 className="mt-0 mb-12">
                        Instant Usage Rewards
                      </h3>
                      <p className="m-0">
                        For every active user transaction a 2% KISHU reward is granted to holders'; decentralized wallets only, fostering a healthy distributed network and community usage. The more KISHU is actively used, the more rewards are granted!
                      </p>
                    </div>
                  </div>
                </div>
              </SwiperSlide>

              <SwiperSlide>
                <div className="split-item">
                  <div className={
                    classNames(
                      'split-item-image center-content-mobile reveal-from-bottom',
                      imageFill && 'split-item-image-fill'
                    )}
                    data-reveal-container=".split-item">
                    <Image
                      src={require('./../../assets/images/kishu.png')}
                      alt="Features split 02"
                      width={528}
                      height={396} />
                  </div>
                  <div className="split-item-content center-content-mobile reveal-from-right" data-reveal-container=".split-item">
                    {/* <div className="text-xxs text-color-primary fw-600 tt-u mb-8">
                  Lightning fast workflow
                  </div> */}
                    <div className='split-item-info'>
                      <h3 className="mt-0 mb-12">
                        Community Powered
                      </h3>
                      <p className="m-0">
                        BOJI is fully decentralized and owned by its fun, vibrant community. Our enthusiast volunteers welcome and embrace diverse perspectives to build KISHU into the best community in crypto.
                      </p>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            </Swiper>

          </div>
        </div>
      </div>
    </section>
  );
}

WhyCoin.propTypes = propTypes;
WhyCoin.defaultProps = defaultProps;

export default WhyCoin;