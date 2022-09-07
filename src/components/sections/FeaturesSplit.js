import React , { useEffect, useState } from 'react';
import classNames from 'classnames';
import { SectionSplitProps } from '../../utils/SectionProps';
import SectionHeader from './partials/SectionHeader';
import Image from '../elements/Image';
import { Row, Col } from 'react-bootstrap';

const propTypes = {
  ...SectionSplitProps.types
}

const defaultProps = {
  ...SectionSplitProps.defaults
}

const FeaturesSplit = ({
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
    title: 'TOKENOMICS',
  };

  const [marketcap, setMarketcap] = useState('');

  
  const [data,] = useState({
    "56": [
     '0x1b19c6bb5ea3290dc8b4cb722dee9eea7bc7b164'
    ]
   });
   

  useEffect(() => {
   fetch('https://api.coinbrain.com/public/coin-info',{
    method: 'POST',
    headers:{
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data)
   })
   .then(response=>response.json())
   .then(response=>setMarketcap(response[0].marketCapUsd.toString().slice(0,6)))
   .catch(error=>console.log(error))
  }, [data])
  

  return (
    <section
      {...props}
      className={outerClasses}
      id='tokenomics'
    >
      <div className="container tokenomics">
      <SectionHeader data={sectionHeader} className="center-content" />
        <Row className='info'>
          <Col sm={12} md={4} className='mb-4'>
            <Image
              src={require('./../../assets/images/loco.png')}
              alt="Loco"
              width={400}
              height={400} />
          </Col>

          <Col sm={12} md={8} className='m-auto'>
            <p>
              <span>Token: BOJI</span>
            </p>
            <p>
              <span>Contract: <span className='adress'>0x1b19c6bb5ea3290dc8b4cb722dee9eea7bc7b164</span></span>
            </p>
            <p>
              <span>Decimal: 9</span>
            </p>
            <p>
              <span>Total Supply: 700 Trillion</span>
            </p>
            <p>
              <span>MarketCap: ${`${marketcap?.slice(0,3)},${marketcap?.slice(3,6)}`} </span>
            </p>
          </Col>
        </Row>

        <Row className='text-center mt-5'>
          <Col sm={12} md={3} className='mb-3' >
            <p className='percent'>1%</p>
            <p>Holders Rewards Distribution</p>
          </Col>
          <Col sm={12} md={3} className='mb-3'>
            <p className='percent'>2%</p>
            <p>Charity Fee</p>
          </Col>
          <Col sm={12} md={3} className='mb-3'>
            <p className='percent'>3%</p>
            <p>Liquidity Fee</p>
          </Col>
          <Col sm={12} md={3} className='mb-3'>
            <p className='percent'>4%</p>
            <p>Marketing Fee</p>
          </Col>
        </Row>
      </div>
    </section>
  );
}

FeaturesSplit.propTypes = propTypes;
FeaturesSplit.defaultProps = defaultProps;

export default FeaturesSplit;