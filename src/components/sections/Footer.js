import React from 'react'
import { Row, Col } from 'react-bootstrap'


const Footer = () => {

  const year =  new Date().getFullYear();

  return (
    <footer>
    <div className='container footer'>
       
        <Row className='text-center'>
            <Col sm={12} md={3} xl={3}>
            <div className='mb-2 headers'>
            {/* <Image
                src={require('../.././assets/images/mainBoji.png')}
                alt="Boji Token Icon"
                width={32}
                height={32} /> */}
                BOJI TOKEN
            </div>

            <div>
              <nav>
                <div>
                  <span className='boji-left-header'>
                  Token
                  </span>
                </div>

                <div>
                  <span className='boji-left-header'>
                  Web3
                  </span>
                </div>

                <div>
                  <span className='boji-left-header'>
                  NFTs
                  </span>
                </div>

                <div>
                  <span className='boji-left-header'>
                  Social Impact 
                  </span>
                </div>

                <div>
                  <span className='boji-left-header'>
                  Play2Earn
                  </span>
                </div>

                <div>
                  <span className='boji-left-header'>
                  Metaverse
                  </span>
                </div>
              </nav>
            </div>
            </Col>

            <Col sm={12} md={3} xl={3} className='mb-4'>
            <div className='mb-2 headers'>
                LEGAL
            </div>
            
            <div>
                <nav>
                  <div>
                    <a href="#/">Privacy Policy</a>
                  </div>
                  <div>
                    <a href="#/">Terms &amp; Conditions</a>
                  </div>
                </nav>
            </div>
            </Col>

            <Col sm={12} md={3} xl={3}  className='mb-4'>
            <div className='mb-2 headers'>
                SOCIALS
            </div>

            <div>
            <nav>
                  <div>
                    <a href='https://www.twitter.com/bojitoken' target="_blank" rel="noopener noreferrer">
                      Twitter
                    </a>
                  </div>
                  <div>
                    <a href='https://t.me/bojitoken' target="_blank" rel="noopener noreferrer">
                      Telegram
                    </a>
                  </div>
                  <div>
                    <a href='https://instagram.com/bojitokenofficial' target="_blank" rel="noopener noreferrer">
                    Instagram
                    </a>
                  </div>
                  <div>
                    <a href='https://medium.com/@bojitoken' target="_blank" rel="noopener noreferrer">
                    Medium
                    </a>
                  </div>
                  <div>
                    <a href='https://discord.gg/boji' target="_blank" rel="noopener noreferrer">
                    Discord
                    </a>
                  </div>
                  <div>
                    <a href='https://reddit.com/'target="_blank" rel="noopener noreferrer">
                      Reddit
                    </a>
                  </div>
                  <div>
                    <a href='https://github.com/bojitoken/boji' target="_blank" rel="noopener noreferrer">
                      GitHub
                    </a>
                  </div>
                  <div>
                    <a href='https://www.youtube.com/channel/UCNfynbG_FtjVvUSE4j5X4Wg' target="_blank" rel="noopener noreferrer">
                      Youtube
                    </a>
                  </div>
                  <div>
                    <a href='https://linktr.ee/bojitoken' target="_blank" rel="noopener noreferrer">
                    Linktree 
                    </a>
                  </div>
                </nav>
            </div>
            </Col>

            <Col sm={12} md={3} xl={3}  className='mb-4'>
            <div className='mb-2 headers'>
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

<div style={{height:'80px'}}>
    <Row className='text-center'>
      <div>
      A Bojify Product.
      </div>
      <div className='copyright '>
       Copyright © Boji Token {year}. All rights reserved.
      </div>
    </Row>

    </div>
    </footer>
  )
}

export default Footer