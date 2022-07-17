import React from 'react';
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

  return (
    <section
      {...props}
      className={outerClasses}
    >
      <div className="container tokenomics">
      <SectionHeader data={sectionHeader} className="center-content" />
        <Row className='info'>
          <Col sm={12} md={4}>
            <Image
              src={require('./../../assets/images/mainBoji.png')}
              alt="Features split 02"
              width={300}
              height={300} />
          </Col>

          <Col sm={12} md={8}>
            <h4>BOJI TOKEN</h4>

            <p>
              <span>Token: BOJI</span>
            </p>
            <p>
              <span>Contract: 0x1b19c6bb5ea3290dc8b4cb722dee9eea7bc7b164</span>
            </p>
            <p>
              <span>Decimal: 7</span>
            </p>
            <p>
              <span>Total Supply: 700 Trillion</span>
            </p>
          </Col>
        </Row>

        <Row className='text-center mt-5'>
          <Col sm={12} md={4} >
            <p className='percent'>1%</p>
            <p>Holders Rewards Distribution</p>
          </Col>
          <Col sm={12} md={4}>
            <p className='percent'>3%</p>
            <p>Liquidity Fee</p>
          </Col>
          <Col sm={12} md={4}>
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