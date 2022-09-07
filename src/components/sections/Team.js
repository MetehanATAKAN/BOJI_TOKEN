import React from 'react'
import Image from '../elements/Image'
import { Row,Col }  from 'react-bootstrap'
import SectionHeader from './partials/SectionHeader'
const Team = () => {

    const teamsInfo = [
        {
            image: require('../../assets/images/team/paw.png'),
            name: 'Paw ',
            title: 'Co-Founder & CTO',
            instagram:'https://www.google.com.tr/?hl=tr',
            twitter:'https://www.google.com.tr/?hl=tr',
            mail:'paw@boji.finance'
        },
        {
            image: require('../../assets/images/team/claw.png'),
            name: 'Claw ',
            title: 'Co-Founder & COO',
            instagram:'https://www.google.com.tr/?hl=tr',
            twitter:'https://www.google.com.tr/?hl=tr',
            mail:'claw@boji.finance'
        },
        {
            image: require('../../assets/images/team/tail.png'),
            name: 'Tail ',
            title: 'CMO',
            instagram:'https://www.google.com.tr/?hl=tr',
            twitter:'https://www.google.com.tr/?hl=tr',
            mail:'tail@boji.finance'
        },
        {
            image: require('../../assets/images/team/mouth.png'),
            name: 'Mouth ',
            title: 'Communication Director',
            instagram:'https://www.google.com.tr/?hl=tr',
            twitter:'https://www.google.com.tr/?hl=tr',
            mail:'mouth@boji.finance'
        },
    ]

    const sectionHeader = {
        title: 'TEAM',
      };
      
    return (
        <section className='teams' id='team'>
            <div className="container">
            <SectionHeader data={sectionHeader} className="center-content" />
                <Row style={{textAlign:'-webkit-center'}}>
                    {
                        teamsInfo.map(team => (
                            <Col sm={3} className='team-card mb-5'>
                                <div className='image'> {
                                    <Image
                                    src={team.image}
                                    alt="Boji Icon"
                                    width={100}
                                    height={100} />
                                } </div>
                                <div className='name'>  {team.name} </div>
                                <div className='title'> {team.title} </div>
                                <div className='social'>
                                    
                                    <a href={`mailto:${team.mail}`}>
                                    <i class="fa-regular fa-envelope"></i>
                                    </a>
                                </div>
                            </Col>
                        ))
                    }
                </Row>
            </div>
        </section>
    )
}

export default Team