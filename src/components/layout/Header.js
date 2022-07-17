import React, { useState, useRef, useEffect } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { Link } from 'react-router-dom';
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
  const [isSelectLanguage, setIsSelectLanguage] = useState(true);

  const nav = useRef(null);
  const hamburger = useRef(null);

  const { t, i18n } = useTranslation();


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

  const changeLanguage2 = () => {
    setIsSelectLanguage(!isSelectLanguage);
    console.log(isSelectLanguage);

    if (isSelectLanguage === true) {
      localStorage.setItem('i18nextLnga', 'tr');
      i18n.changeLanguage('tr');
    }
    else {
      localStorage.setItem('i18nextLnga', 'en');
      i18n.changeLanguage('en');
    }
  }

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

                    <a href='#0'> {t('Our Team')} </a>
                    <a href='#1'>Partners</a>
                    <a href='#2'>Community</a>
                    <a href='#3'>Contact</a>

                  </div>
                  <div className='language-switch' style={{ marginRight: '15px' }}>
                    {/* <label className='language-tr'  style={{marginRight:'10px'}}>TR</label>
                    <label class="switch">
                      <input type="checkbox" checked={isSelectLanguage} onChange={()=>changeLanguage2(isSelectLanguage === false ?'tr':'en')}  />
                      <span class="slider round"></span>
                    </label>
                    <label className='language-en'  style={{marginLeft:'10px'}}>EN</label> */}

                    <label class="switch">
                      <input type="checkbox" class="checkbox" checked={isSelectLanguage} onChange={() => changeLanguage2(isSelectLanguage === false ? 'tr' : 'en')} />
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
                        {/* <i class="fa-solid fa-circle-trash" style={{fill:'#4ADE80',transform:'-ms-filter:'}}></i>
     <i class="fa-solid fa-circle-trash" style={{fill:'#F87171',transform:'-ms-filter:'}}></i> */}
                        {/* <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 24 24" style={{fill:'#4ADE80',transform:'-ms-filter:'}} ><path d="M10 15.586L6.707 12.293 5.293 13.707 10 18.414 19.707 8.707 18.293 7.293z"></path></svg>

          <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 24 24" style={{fill:'#F87171',transform:'-ms-filter:'}} ><path d="M16.192 6.344L11.949 10.586 7.707 6.344 6.293 7.758 10.535 12 6.293 16.242 7.707 17.656 11.949 13.414 16.192 17.656 17.606 16.242 13.364 12 17.606 7.758z"></path></svg> */}

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
