import React , { useEffect, useState } from 'react';
// import sections
import Hero from '../components/sections/Hero';
import FeaturesSplit from '../components/sections/FeaturesSplit';
import WhyCoin from '../components/sections/WhyCoin';
import Media from '../components/sections/Media'
import Team from '../components/sections/Team';
import Chart2 from '../components/sections/Chart';
import Community from '../components/sections/Community';
import RoadMap from '../components/sections/RoadMap';
import Footer from '../components/sections/Footer';
import NftCollections from '../components/sections/NftCollections';
import Ecosystem from '../components/sections/Ecosystem';
import AsSeenIn from '../components/sections/AsSeenIn';
import About from '../components/sections/About';
import OurPartners from '../components/sections/OurPartners';

const Home = () => {

  const [country, setCountry] = useState('');
  const [ipAdress, setIpAdress] = useState('');

  useEffect(() => {
   fetch(`http://ip-api.com/json/${ipAdress}`)
   .then(response => response.json())
   .then(result=>{
    if(result.country === 'Turkey'){
      setCountry('Turkey');
    }
    else {
      setCountry('Other');
    }
   })
   .catch(error=>console.log(error))
  }, [ipAdress])
  
  

  useEffect(() => {
    fetch('https://api64.ipify.org?format=json')
    .then(response=>response.json())
    .then(response=>setIpAdress(response.ip))
    .catch(error=>console.log(error))
  }, [])

  return (
    
    <>
      <Hero imageFill className="illustration-section-01" />
      <AsSeenIn/>
      <About imageFill />
      <OurPartners/>
      <Ecosystem/>
      <FeaturesSplit invertMobile topDivider imageFill className="illustration-section-02" />
      <RoadMap/>
      <Chart2/>
      <NftCollections/>
      <Team/>
      <Media/>
      <Community/>
      <WhyCoin invertMobile topDivider imageFill className="illustration-section-02"/>
      <Footer/>
    </>
  );
}

export default Home;