import React, { useState } from 'react';
import classNames from 'classnames';
import { SectionTilesProps } from '../../utils/SectionProps';
import { Row, Col } from 'react-bootstrap';
import Bounce from 'react-reveal/Bounce';
import { useTranslation } from 'react-i18next';
import SectionHeader from './partials/SectionHeader';
import Price from '../layout/Price';

const propTypes = {
  ...SectionTilesProps.types
}

const defaultProps = {
  ...SectionTilesProps.defaults
}
const About = ({
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

  const { t } = useTranslation();

  const [cards] = useState([
    {
      imageUrl: require('../../assets/images/mainBoji.png'),
      frontHeader: 'Web3',
      frontInfo: 'BOJI Ecosystem and Products uses Web3 technologies. ',
      backInfo:'Web3 embraces decentralization and is being built, operated, and owned by its users. Web3 puts power in the hands of individuals rather than corporations. Web3 has become a catch-all term for the vision of a new, better internet. At its core, Web3 uses blockchains, cryptocurrencies, and NFTs to give power back to the users in the form of ownership. BOJI is also a Web3 project and puts a lot of space into this new technology in its ecosystem. With Web3 technology, BOJI aims to make products such as Bojilogy, Boji Swap and BojiMP accessible all over the world.'
    },

    {
      imageUrl: require('../../assets/images/mainBoji.png'),
      frontHeader: 'GameFi',
      frontInfo: 'Gamification is an important tool to raise awareness. ',
      backInfo:'The blockchain gaming ecosystem is evolving at a rapid pace. One of the trending topics in crypto right now is GameFi, with new developments seen at an accelerating rate thanks to promising gameplay and the economic incentives it entails. In the BOJI ecosystem, Play to Earn also includes games. With the Play to Earn mechanism, it allows users to actively earn BOJI by interacting with multiple products and without getting bored. RunBOJI is officially launched by $BOJI on Binance Smart Chain blockchain as version 1st and the first game of $BOJI Token. It is an interactive, Hyper-Casual type game which is addictive.'
    },

    {
      imageUrl: require('../../assets/images/mainBoji.png'),
      frontHeader: 'NFT Collections',
      frontInfo: 'NFTs are are unique element to add utility to the community. ',
      backInfo:'NFTs has taken the crypto world by storm in the past 12 months, and while they’re not loved by everyone, they’ve caught most people’s attention due to the sheer volume and number of projects popping up in the space. Additionally, the BOJI project sees NFTs as a service tool and we use them to add utility to our project. For example, it will be used for in-game uses, in-project purchases, and to gain privileges within the community. NFT owners will be visually connected to their NFTs and enjoy owning them. There is also a NFT collection about our token that has already been launched on OpenSea. NFTs will continue to be of great importance for the future of our project.'
    },

    {
      imageUrl: require('../../assets/images/mainBoji.png'),
      frontHeader: 'Community',
      frontInfo: 'Community is the most valuable phenomenon for our project. ',
      backInfo:'For a blockchain business, crypto community is its first and most favourable target which it has to achieve. For cryptocurrency, every community have its own basic tools and their own important currency to spend that currency on their needs. BOJI attaches great importance to the community and is constantly collaborating with them to be beneficial to the community. In addition, BOJI has established an organization called BojiForce within itself and will offer some privileges to this formation in order for this formation to be effective. By using NFTs actively in the community, it aims to make people feel valuable and to provide the necessary activation energy for the development of the project. In short, the Community and the project are inseparable.'
    },
  ])

  const sectionHeader = {
    title: 'ABOUT',
  };

  return (
    <section
      {...props}
      className={outerClasses}
      id='about'
    >
      <SectionHeader data={sectionHeader} className="center-content" />
      <div className='container about'>
        <Bounce left>
          <Row>
            <p className="m-0 ">
              {t(
                'BOJI is an high-tech blockchain platform for advanced smart contract applications that can be used by millions of users. BOJI core functional objective is to bridge two environments: on-chain and offchain. Every element in our ecosystem is enriched with two different architectures designed intertwined with each other. With the On-Chain architecture, every transaction in the ecosystem elements will be displayed transparently, and after each completed transaction, each service in these elements will be able to work in an integrated manner with each other. The core task of the OffChain architecture is to smooth the operation on the blockchain.'
              )}
            </p>
          </Row>

        </Bounce>

        <Bounce right>
          <div className='tech-audit'>
            <Row className='tech-audit-main'>
              <Col sm={4} md={3} >
                <p className='font-weight-bold fs-6'>Company : Techrate </p>
              </Col>

              {/* <Col sm={4} md={1} >
                <div>
                  <i className="fa-solid fa-circle circle"></i>
                </div>
              </Col> */}

              <Col sm={4} md={3}  >
                <div className='d-flex'>
              
                <div style={{marginRight:'10px'}}>
                  <p>
                    Status : Completed
                  </p>
                </div>
                <div>
                  <i className="fa-solid fa-circle circle"></i>
                </div>

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
        </Bounce>


        <Row className='mt-3'>
          {
            cards.map((card, index) => (
              <Col sm={12} md={6} lg={6} xl={3} key={index} className='about-card'>
                <div className="flip-card m-auto">
                  <div className="flip-card-inner">
                    <div className="flip-card-front">
                      <div style={{paddingTop:'30px'}}>
                      <img className='m-auto mt-3' src={card.imageUrl} alt="Avatar" width={50} height={50} />
                      <h5 className='mt-2'> {card.frontHeader} </h5>
                      <div style={{fontSize:'12px'}} > {card.frontInfo} </div>
                      </div>
                    </div>
                    <div className="flip-card-back">
                      <p style={{fontSize:'12px',padding:'15px'}}>
                        {card.backInfo}
                      </p>
                    </div>
                  </div>
                </div>
              </Col>
            ))
          }
        </Row>
      </div>
      <Price/>
    </section>
  );
}

About.propTypes = propTypes;
About.defaultProps = defaultProps;

export default About;