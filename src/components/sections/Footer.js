import React from 'react'
import { Row, Col } from 'react-bootstrap'
import Image from '../elements/Image'

const Footer = () => {
  return (
    <div className='container'>
       <footer>
        <Row className='text-center'>
            <Col sm={12} md={3} xl={3}>
            <div className='mb-4'>
            <Image
                src={require('../.././assets/images/mainBoji.png')}
                alt="Boji Token Icon"
                width={32}
                height={32} />
            </div>

            <div>
                <p className='text-start'>
                VINU - VinuSwap - Metaverse - Events - NFTs - And more.
                Join our fast-growing community!
                </p>
            </div>
            </Col>

            <Col sm={12} md={3} xl={3}>
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

            <Col sm={12} md={3} xl={3}>
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

            <Col sm={12} md={3} xl={3}>
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
       </footer>
    </div>
  )
}

export default Footer