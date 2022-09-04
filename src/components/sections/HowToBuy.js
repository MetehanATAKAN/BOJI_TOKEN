import React  from 'react'
import SectionHeader from './partials/SectionHeader'
import {useSelector} from "react-redux"

const HowToBuy = () => {

    const country = useSelector(state=>state.langugeSwitch.language);

    console.log(country);

    const sectionHeader = {
        title: 'HOW TO BUY',
      };

  return (
    <div className='container'>
         <SectionHeader data={sectionHeader} className="center-content"  />
         {
            country === 'TURKEY'
            ?<img className='m-auto' src={require('../../assets/images/howtobuyTR.png')} alt='How To Buy'/>
            :<img className='m-auto' src={require('../../assets/images/howtobuyEN.png')} alt='How To Buy'/>
         }
    </div>
  )
}

export default HowToBuy