import React, { useState } from 'react';
import classNames from 'classnames';
import { SectionSplitProps } from '../../utils/SectionProps';
import SectionHeader from './partials/SectionHeader';
import { Swiper, SwiperSlide } from 'swiper/react/swiper-react';
import { Pagination,Autoplay } from "swiper";
import { Row, Col } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';

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

  const { t } = useTranslation();

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
    title: 'FAQ',
  };

  const [question] = useState([
    {
      question:'How does the Auto staking reward system work? Where do I get the rewards?',
      answer:'For every transaction in the BOJI network 1% fee is being distributed to the existing holders. That means you earn Boji Token (BOJI) just by holding it in your wallet. Watch your Boji Token (BOJI) grows in every transaction!'
    },
    {
      question:'What is Charity Fee?',
      answer:'2% of every transaction fees donate to charity for increasing the conditions of animals.'
    },
    {
      question:'Where can I buy $BOJI?',
      answer:'Currently $BOJI is listed on PancakeSwap and Azbit.'
    }
  ])

  return (
    <section
      {...props}
      className={outerClasses}
    >
      <div className="container why-boji">
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
              {
                question.map(item=>(
                  <SwiperSlide>
                    <Row className='mt-5'>
                      <Col sm={5}>
                      <img className='m-auto mb-4' alt='img-12'   src={require('../../assets/images/faq.png')}></img>
                      </Col>
                      <Col sm={7} className='m-auto'>
                      <h5 className="mt-0 mb-12">
                          <span style={{color:'red'}}>{t('Question')}: </span>{t(item.question)}
                        </h5>
                        <p className="m-0">
                         <span style={{color:'green'}}>{t('Answer')}: </span>{t(item.answer)}
                        </p>
                      </Col>
                    </Row>
                  {/* <div className="split-item">
                    <div 
                      >
                        <img className='m-auto mb-4' alt='img-12'  style={{width:'500px'}} src={require('../../assets/images/faq.png')}></img>
                    </div>
                    
                      <div className='split-item-info'>
                        <h3 className="mt-0 mb-12">
                          <span style={{color:'red'}}>Question: </span>{item.question}
                        </h3>
                        <p className="m-0">
                         <span style={{color:'green'}}>Answer: </span>{item.answer}
                        </p>
                      </div>
                    
                  </div> */}
                </SwiperSlide>
                ))
              }
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