import React from 'react'
import { Col, Row } from 'react-bootstrap'
import { useTranslation } from 'react-i18next'
import Image from '../elements/Image'
import SectionHeader from './partials/SectionHeader'

const Community = () => {

    const { t } = useTranslation();

    const community = [
        {
            image: require('../../assets/images/telegram.png'),
            name: 'Telegram',
            href:'https://t.me/bojitoken'
        },
        {
            image: require('../../assets/images/twitter.png'),
            name: 'Twitter',
            href:'https://www.twitter.com/bojitoken'
        },
        {
            image: require('../../assets/images/discord.png'),
            name: 'Discord',
            href:'https://discord.gg/boji'
        },
        {
            image: require('../../assets/images/instagram.png'),
            name: 'Instagram',
            href:'https://instagram.com/bojitokenofficial'
        },
        {
            image: require('../../assets/images/youtube.png'),
            name: 'YouTube',
            href:'https://www.youtube.com/channel/UCNfynbG_FtjVvUSE4j5X4Wg'
        },
    ]

    const sectionHeader = {
        title: 'COMMUNITY',
      };
    return (
        <div className='container' style={{maxWidth:'900px'}}>
             <SectionHeader data={sectionHeader} className="center-content" />
             <p style={{textAlign:'center'}}>{t('Our community grows stronger every day. Please follow our social platforms to get the most up-to-date, accurate BOJI information.')}</p>
                <div className='community  d-flex justify-content-around'>
                    {

                        community.map(community=>(
                            <div className='item'>
                                <a href={community.href}>
                                <div>
                                    <Image
                                        src={community.image}
                                        alt="Features split 02"
                                        width={50}
                                        height={50} />
                                </div>
                                <div>{community.name}</div>
                            </a>
                            </div>
                        ))
                    }
                </div>
        </div>
    )
}

export default Community