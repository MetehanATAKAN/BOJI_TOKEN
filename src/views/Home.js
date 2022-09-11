import React  from 'react';
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
// import Ecosystem from '../components/sections/Ecosystem';
import AsSeenIn from '../components/sections/AsSeenIn';
import About from '../components/sections/About';
import OurPartners from '../components/sections/OurPartners';
import HowToBuy from '../components/sections/HowToBuy';
import Ecosystem2 from '../components/sections/Ecosystem2';

const Home = () => {

  return (
    
    <>
      <Hero imageFill className="illustration-section-01" />
      <AsSeenIn/>
      <About imageFill />
      <OurPartners/>
      {/* <Ecosystem/> */}
      <Ecosystem2/>
      <FeaturesSplit invertMobile topDivider imageFill className="illustration-section-02" />
      <HowToBuy/>
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