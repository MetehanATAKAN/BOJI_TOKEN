import React from 'react'
import SectionHeader from './partials/SectionHeader'
import { Row, Col } from 'react-bootstrap'
import Image from '../elements/Image';

const NftCollections = () => {

    const sectionHeader = {
        title: 'NFT COLLECTIONS',
    };
    return (
        <div className='container'>
            <SectionHeader data={sectionHeader} className="center-content" />

            <Row>
                <Col>
                <div className='nft-item'>
                    <Image
                        src={require('./../../assets/images/mainBoji.png')}
                        alt="Features split 02"
                        width={300}
                        height={300} />
                </div>
                </Col>
                <Col>
                <div className='nft-item'>
                    <Image
                        src={require('./../../assets/images/mainBoji.png')}
                        alt="Features split 02"
                        width={300}
                        height={300} />
                </div>
                </Col>
                <Col>
                <div className='nft-item'>
                    <Image
                        src={require('./../../assets/images/mainBoji.png')}
                        alt="Features split 02"
                        width={300}
                        height={300} />
                </div>
                </Col>
                <Col>
                <div className='nft-item'>
                    <Image
                        src={require('./../../assets/images/mainBoji.png')}
                        alt="Features split 02"
                        width={300}
                        height={300} />
                </div>
                </Col>
            </Row>

            <Row>
                <Col>
                      metehan  
                </Col>

                <Col>
                atakan
                </Col>

                <Col>
                      metehan  
                </Col>

                <Col>
                      metehan  
                </Col>
            </Row>
        </div>
    )
}

export default NftCollections