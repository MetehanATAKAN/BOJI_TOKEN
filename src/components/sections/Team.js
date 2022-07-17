import React from 'react'
import Image from '../elements/Image'
import { Row,Col }  from 'react-bootstrap'
import SectionHeader from './partials/SectionHeader'
const Team = () => {

    const teamsInfo = [
        { image: require('../../assets/images/team1.png'), name: 'Elomont', title: 'Founder & CEO' },
        { image: require('../../assets/images/team2.png'), name: 'Milltay', title: 'Co-Founder & Brand Director' },
        { image: require('../../assets/images/team3.png'), name: 'Shuttlecock', title: 'Operations Director' },
        { image: require('../../assets/images/team4.png'), name: 'Bobster', title: 'Communications Director' },
    ]

    const sectionHeader = {
        title: 'TEAM',
      };
    return (
        <section className='teams'>
            <div className="container">
            <SectionHeader data={sectionHeader} className="center-content" />
                <Row style={{textAlign:'-webkit-center'}}>
                    {
                        teamsInfo.map(team => (
                            <Col sm={3} className='team-card'>
                                <div className='image'> {
                                    <Image
                                    src={team.image}
                                    alt="Boji Icon"
                                    width={100}
                                    height={100} />
                                } </div>
                                <div className='name'>  {team.name} </div>
                                <div className='title'> {team.title} </div>
                            </Col>
                        ))
                    }
                </Row>
            </div>
        </section>
    )
}

export default Team