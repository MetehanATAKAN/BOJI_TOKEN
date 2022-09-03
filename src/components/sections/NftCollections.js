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
                <Col sm={12} md={3} className='nft-main'>
                <div className='nft-item'>
                    <Image
                        src={require('./../../assets/images/mainBoji.png')}
                        alt="Features split 02"
                        width={300}
                        height={300} />
                </div>

                    <div 
                    className='text-center'
                    style={{
                        margin:'auto',
                        marginTop:'15px'
                    }}  
                    >
                        <div>Boji v1</div>
                    <a href='#/' >
                    <Image
                        src={require('./../../assets/images/opensea3.png')}
                        />
                    </a>
                    </div>
                </Col>
                <Col sm={12} md={3} className='nft-main'>
                <div className='nft-item'>
                    <Image
                        src={require('./../../assets/images/mainBoji.png')}
                        alt="Features split 02"
                        width={300}
                        height={300} />
                </div>
                <div 
                    className='text-center'
                    style={{
                        margin:'auto',
                        marginTop:'15px'
                    }}  
                    >
                        <div>BojiForce NFT</div>
                    <a href='#/' >
                    <Image
                        src={require('./../../assets/images/opensea3.png')}
                        />
                    </a>
                </div>
                </Col>
                <Col sm={12} md={3} className='nft-main'>
                <div className='nft-item'>
                    <Image
                        src={require('./../../assets/images/mainBoji.png')}
                        alt="Features split 02"
                        width={300}
                        height={300} />
                </div>
                <div 
                    className='text-center'
                    style={{
                        margin:'auto',
                        marginTop:'15px'
                    }}  
                    >
                        <div>Boji v2</div>
                <a href='#/' >
                    <Image
                        src={require('./../../assets/images/opensea3.png')}
                        />
                    </a>
                </div>
                </Col>
                <Col sm={12} md={3} className='nft-main'>
                <div  className='nft-item'>
                    <Image
                        src={require('./../../assets/images/mainBoji.png')}
                        alt="Features split 02"
                        width={300}
                        height={300} />
                </div>
                <div 
                    className='text-center'
                    style={{
                        margin:'auto',
                        marginTop:'15px'
                    }}  
                    >
                         <div>Soon</div>
                <a href='#/' >
                    <Image
                        src={require('./../../assets/images/opensea3.png')}
                        />
                    </a>
                </div>
                </Col>
            </Row>
        </div>
    )
}

export default NftCollections