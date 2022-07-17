import React from 'react'
import { Col, Row } from 'react-bootstrap'
import Image from '../elements/Image'
import SectionHeader from './partials/SectionHeader'

const Community = () => {

    const community = [
        {
            image: require('../../assets/images/telegram.svg'),
            name: 'Telegram'
        },
        {
            image: require('../../assets/images/twitter.svg'),
            name: 'Twitter'
        },
        {
            image: require('../../assets/images/discord.svg'),
            name: 'Discord'
        },
        {
            image: require('../../assets/images/instagram.svg'),
            name: 'Instagram'
        },
    ]

    const sectionHeader = {
        title: 'COMMUNITY',
      };
    return (
        <div className='container' style={{maxWidth:'900px'}}>
             <SectionHeader data={sectionHeader} className="center-content" />
             <p style={{textAlign:'center'}}>Our community grows stronger every day. Please follow our social platforms to get the most up-to-date, accurate BOJI information.</p>
            <Row style={{textAlign:'-webkit-center'}}>
                {
                    community.map(community => (
                        <Col xs={12} sm={3} className='mb-4'>
                            <a href='#/'>
                                <div>
                                    <Image
                                        src={community.image}
                                        alt="Features split 02"
                                        width={50}
                                        height={50} />
                                </div>
                                <div>{community.name}</div>
                            </a>
                        </Col>
                    ))
                }
            </Row>
        </div>
    )
}

export default Community