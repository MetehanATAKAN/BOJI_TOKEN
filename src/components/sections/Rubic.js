import React from 'react'
import SectionHeader from './partials/SectionHeader'

const Rubic = () => {
  const sectionHeader = {
    title: 'RUBIC',
  };
  return (
    <div className='container'>
      <SectionHeader data={sectionHeader} className="center-content" />
        <div id="rubic-widget-root"></div>
    </div>
  )
}

export default Rubic