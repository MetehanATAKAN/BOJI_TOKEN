import React, { useState } from 'react'
import SectionHeader from './partials/SectionHeader'
import { Row, Col } from 'react-bootstrap'
import Image from '../elements/Image';

const NftCollections = () => {

    const [nftCollections] = useState([
        {
            src:require('../../assets/images/bojiv1.png'),
            imgAlt:'Boji V1',
            name:'Boji V1',
            href:'https://opensea.io/collection/bojitoken'
        },
        {
            src:require('../../assets/images/bojiForce.jpg'),
            imgAlt:'BojiForce NFT',
            name:'BojiForce NFT',
            href:'#/'
        },
        {
            src:require('../../assets/images/mainBoji.png'),
            imgAlt:'Boji V2',
            name:'Boji V2',
            href:'#/'
        },
        {
            src:require('../../assets/images/mainBoji.png'),
            imgAlt:'Soon',
            name:'Soon',
            href:'#/'
        },
    ])

    const sectionHeader = {
        title: 'NFT COLLECTIONS',
    };
    return (
        <div className='container nft-collections'>
            <SectionHeader data={sectionHeader} className="center-content" />

            <Row>
                {
                    nftCollections.map(data=>(
                        <Col sm={12} md={3} className='nft-main'>
                        <div className='nft-item'>
                            <Image
                                src={data.src}
                                alt={data.imgAlt}
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
                                <div> {data.name} </div>
                            <a href={data.href} >
                            <Image
                                src={require('./../../assets/images/opensea3.png')}
                                />
                            </a>
                            </div>
                        </Col>
                    ))
                }
            </Row>
        </div>
    )
}

export default NftCollections