import React, { useState, useRef, useEffect } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import Logo from './partials/Logo';
import FooterSocial from './partials/FooterSocial';
import { useTranslation } from 'react-i18next';
import Image from '../elements/Image';

const propTypes = {
  navPosition: PropTypes.string,
  hideNav: PropTypes.bool,
  hideSignin: PropTypes.bool,
  bottomOuterDivider: PropTypes.bool,
  bottomDivider: PropTypes.bool
}

const defaultProps = {
  navPosition: '',
  hideNav: false,
  hideSignin: false,
  bottomOuterDivider: false,
  bottomDivider: false
}

const Header = ({
  className,
  navPosition,
  hideNav,
  hideSignin,
  bottomOuterDivider,
  bottomDivider,
  ...props
}) => {

  const [isActive, setIsactive] = useState(false);
  const [isSelectLanguage, setIsSelectLanguage] = useState(localStorage.getItem('language') === 'Turkey' ? false : true);
  

  const nav = useRef(null);
  const hamburger = useRef(null);

  const {  i18n } = useTranslation();


  useEffect(() => {
    isActive && openMenu();
    document.addEventListener('keydown', keyPress);
    document.addEventListener('click', clickOutside);
    return () => {
      document.removeEventListener('keydown', keyPress);
      document.removeEventListener('click', clickOutside);
      closeMenu();
    };
  });

  const openMenu = () => {
    document.body.classList.add('off-nav-is-active');
    nav.current.style.maxHeight = nav.current.scrollHeight + 'px';
    setIsactive(true);
  }

  const closeMenu = () => {
    document.body.classList.remove('off-nav-is-active');
    nav.current && (nav.current.style.maxHeight = null);
    setIsactive(false);
  }

  const keyPress = (e) => {
    isActive && e.keyCode === 27 && closeMenu();
  }

  const clickOutside = (e) => {
    if (!nav.current) return
    if (!isActive || nav.current.contains(e.target) || e.target === hamburger.current) return;
    closeMenu();
  }

  const classes = classNames(
    'site-header',
    bottomOuterDivider && 'has-bottom-divider',
    className
  );

  const [ipAdress, setIpAdress] = useState('');

  useEffect(() => {
   fetch(`http://ip-api.com/json/${ipAdress}`)
   .then(response => response.json())
   .then(result=>{
    if(result.country === 'Turkey'){
      setIsSelectLanguage(false);
      i18n.changeLanguage('tr');
    }
    else {
      setIsSelectLanguage(true);
      i18n.changeLanguage('en');
    }
    localStorage.setItem('language', result.country);
   })
   .catch(error=>console.log(error))
  }, [i18n, ipAdress])
  
  

  useEffect(() => {
    fetch('https://api64.ipify.org?format=json')
    .then(response=>response.json())
    .then(response=>setIpAdress(response.ip))
    .catch(error=>console.log(error))
  }, [])
  
  

  const changeLanguage2 = (lng) => {
    setIsSelectLanguage(!isSelectLanguage);
    console.log(isSelectLanguage);

    if (isSelectLanguage === true) {
      localStorage.setItem('language', 'tr');
      i18n.changeLanguage('tr');
    }
    else {
      localStorage.setItem('language', 'en');
      i18n.changeLanguage('en');
    }
  }

  const [selectorLink] = useState([
    // {
    //   href:'#asSeenIn',
    //   name:'As Seen In'
    // },
    {
      href:'#about',
      name:'About'
    },
    // {
    //   href:'#ourpartners',
    //   name:'Our Partners'
    // },
    {
      href:'#ecosystem',
      name:'Ecosystem'
    },
    {
      href:'#tokenomics',
      name:'Tokenomics'
    },
    {
      href:'#roadmap',
      name:'Roadmap'
    },
    {
      href:'#tokendistribution',
      name:'Token Distribution'
    },
    {
      href:'#team',
      name:'Team'
    },
    // {
    //   href:'#media',
    //   name:'Media'
    // },
    // {
    //   href:'#community',
    //   name:'Community'
    // },
    // {
    //   href:'#faq',
    //   name:'FAQ'
    // },
  ])

  return (
    <header
      {...props}
      className={classes}
    >
      <div className="container">
        <div className={
          classNames(
            'site-header-inner',
            bottomDivider && 'has-bottom-divider'
          )}>
          <Logo />
          {!hideNav &&
            <>
              <button
                ref={hamburger}
                className="header-nav-toggle"
                onClick={isActive ? closeMenu : openMenu}
              >
                <span className="screen-reader">Menu</span>
                <span className="hamburger">
                  <span className="hamburger-inner"></span>
                </span>
              </button>
              <nav
                ref={nav}
                className={
                  classNames(
                    'header-nav',
                    isActive && 'is-active'
                  )}>
                <div className="header-nav-inner">
                  <div className={
                    classNames(
                      'header text-xs',
                      navPosition && `header-nav-${navPosition}`
                    )}>

                      {
                        selectorLink.map((itemm,index)=>(
                          <a href={itemm.href} key={index}>{itemm.name}</a>
                        ))
                      }


                  </div>
                  <div className='language-switch' style={{ marginRight: '15px' }}>
                    <label class="switch">
                      <input type="checkbox" class="checkbox" checked={isSelectLanguage} onChange={() => changeLanguage2(localStorage.getItem('language') === 'Turkey' ? 'Turkey' : 'En')} />
                      <span class="toggle-thumb">
                        
                        <div style={{ marginLeft: '10px' }}>
                          <Image
                            src={require('../../assets/images/united.png')}
                            alt="Open"
                            width={15}
                            height={32} />
                        </div>

                        <div style={{ marginRight: '10px' }}>
                          <Image
                            src={require('../../assets/images/turkey.png')}
                            alt="Open"
                            width={15}
                            height={32} />
                        </div>

                      </span>
                    </label>
                  </div>
                  <FooterSocial />
                </div>
              </nav>
            </>}
        </div>
      </div>
    </header>
  );
}

Header.propTypes = propTypes;
Header.defaultProps = defaultProps;

export default Header;
