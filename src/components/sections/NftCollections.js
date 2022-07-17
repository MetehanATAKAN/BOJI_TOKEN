import React from 'react'
import SectionHeader from './partials/SectionHeader'
import { Row, Col } from 'react-bootstrap'
import Image from '../elements/Image';

const NftCollections = () => {

    const sectionHeader = {
        title: 'NFT COLLECTIONS',
    };
    return (
        <div className='container nft-collections'>
            <SectionHeader data={sectionHeader} className="center-content" />

            <Row>
                <Col sm={12} md={3}>
                <div className='nft-item'>
                    <Image
                        src={require('./../../assets/images/mainBoji.png')}
                        alt="Features split 02"
                        width={300}
                        height={300} />
                </div>

                    <div className='text-center'>metehan</div>
                </Col>
                <Col sm={12} md={3}>
                <div className='nft-item'>
                    <Image
                        src={require('./../../assets/images/mainBoji.png')}
                        alt="Features split 02"
                        width={300}
                        height={300} />
                </div>
                <div className='text-center'>metehan</div>
                </Col>
                <Col sm={12} md={3}>
                <div className='nft-item'>
                    <Image
                        src={require('./../../assets/images/mainBoji.png')}
                        alt="Features split 02"
                        width={300}
                        height={300} />
                </div>
                <div className='text-center'>metehan</div>
                </Col>
                <Col sm={12} md={3}>
                <div  className='nft-item'>
                    <Image
                        src={require('./../../assets/images/mainBoji.png')}
                        alt="Features split 02"
                        width={300}
                        height={300} />
                </div>
                <div className='text-center'>metehan</div>
                </Col>
            </Row>
        </div>
    )
}

export default NftCollections