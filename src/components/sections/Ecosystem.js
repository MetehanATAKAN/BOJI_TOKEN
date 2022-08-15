import React from 'react'
import SectionHeader from './partials/SectionHeader'

const Ecosystem = () => {

  const sectionHeader = {
    title: 'ECOSYSTEM',
  };

  return (
    <>
    <SectionHeader data={sectionHeader} className="center-content" />
    <div className="menu-container">

      
  <div className="circle-menu-box">
  <div style={{position:'absolute',left:'40%',top:'26%'}}>
        metehan atakan
      </div>
    <a href='/' className="menu-item">
      <span className="fa fa-home" />
    </a>
    <a href='/' className="menu-item">
      <span className="fa fa-tag" />
    </a>
    <a href='/' className="menu-item">
      <span className="fa fa-info-circle" />
    </a>
    <a href="/" className="menu-item">
      <span className="fa fa-comments" />
    </a>
    <a href="/" className="menu-item">
      <span className="fa fa-folder-open" />
    </a>
    <a href="/" className="menu-item">
      <span className="fa fa-group" />
    </a>
    <a href="/" className="menu-item">
      <span className="fa fa-newspaper-o" />
    </a>
    <a href="/" className="menu-item">
      <span className="fa fa-sitemap" />
    </a>
  </div>
</div>

  </>
  )
}

export default Ecosystem