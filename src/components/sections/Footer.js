import React from 'react'
import { Row, Col } from 'react-bootstrap'
import Image from '../elements/Image'

const Footer = () => {
  return (
    <footer>
    <div className='container'>
       
        <Row className='text-center'>
            <Col sm={12} md={3} xl={3}>
            <div className='mb-4'>
            {/* <Image
                src={require('../.././assets/images/mainBoji.png')}
                alt="Boji Token Icon"
                width={32}
                height={32} /> */}
                Boji TOKEN
            </div>

            <div>
              <p className='text-start'>
                A Bojify Product
                Token - Web3 - NFTs - Social Impact
                Play2Earn - Metaverse
              </p>
            </div>
            </Col>

            <Col sm={12} md={3} xl={3} className='mb-4'>
            <div className='mb-4'>
                LEGAL
            </div>
            
            <div>
                <nav>
                  <div className='mb-3'>
                    <a href="#/">Privacy Policy</a>
                  </div>
                  <div>
                    <a href="#/">Terms &amp; Conditions</a>
                  </div>
                </nav>
            </div>
            </Col>

            <Col sm={12} md={3} xl={3}  className='mb-4'>
            <div className='mb-4'>
                SOCIALS
            </div>

            <div>
            <nav>
                  <div className='mb-3'>
                    <a href='#/' target="_blank" rel="noopener noreferrer">
                      Discord
                    </a>
                  </div>
                  <div className='mb-3'>
                    <a href='#/' target="_blank" rel="noopener noreferrer">
                      Twitter
                    </a>
                  </div>
                  <div className='mb-3'>
                    <a href='#/' target="_blank" rel="noopener noreferrer">
                      Telegram
                    </a>
                  </div>
                  <div className='mb-3'>
                    <a href='#/' target="_blank" rel="noopener noreferrer">
                      Medium
                    </a>
                  </div>
                  <div className='mb-3'>
                    <a href='#/' target="_blank" rel="noopener noreferrer">
                      Reddit
                    </a>
                  </div>
                  <div className='mb-3'>
                    <a href='#/' target="_blank" rel="noopener noreferrer">
                      Instagram
                    </a>
                  </div>
                  <div className='mb-3'>
                    <a href='#/'target="_blank" rel="noopener noreferrer">
                      Github
                    </a>
                  </div>
                  <div className='mb-3'>
                    <a href='#/' target="_blank" rel="noopener noreferrer">
                      Facebook
                    </a>
                  </div>
                  <div className='mb-3'>
                    <a href='#/' target="_blank" rel="noopener noreferrer">
                      Youtube
                    </a>
                  </div>
                </nav>
            </div>
            </Col>

            <Col sm={12} md={3} xl={3}  className='mb-4'>
            <div className='mb-4'>
                GET IN TOUCH
            </div>
            <div>
            <nav>
                  <div>
                    <a href='#/'>hello@boji.org</a>
                  </div>
                </nav>
            </div>
            </Col>
        </Row>
       
    </div>
    </footer>
  )
}

export default Footer