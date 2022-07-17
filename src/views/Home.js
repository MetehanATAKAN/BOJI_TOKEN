import React from 'react';
// import sections
import Hero from '../components/sections/Hero';
import FeaturesTiles from '../components/sections/FeaturesTiles';
import FeaturesSplit from '../components/sections/FeaturesSplit';
import Testimonial from '../components/sections/Testimonial';
import WhyCoin from '../components/sections/WhyCoin';
import CardSlider from '../components/sections/CardSlider';
import Media from '../components/sections/Media'
import Team from '../components/sections/Team';
import Rubic from '../components/sections/Rubic';
import Chart2 from '../components/sections/Chart';
import Community from '../components/sections/Community';
import RoadMap from '../components/sections/RoadMap';
import Footer from '../components/sections/Footer';
import NftCollections from '../components/sections/NftCollections';

const Home = () => {

  return (
    <>
      <Hero imageFill className="illustration-section-01" />
      <NftCollections/>
      <Community/>
      <Chart2/>
      <RoadMap/>
      <Rubic/>
      <FeaturesTiles imageFill />
      <FeaturesSplit invertMobile topDivider imageFill className="illustration-section-02" />
      <WhyCoin invertMobile topDivider imageFill className="illustration-section-02"/>
      <Team/>
      <Media/>
      <CardSlider/>
      <Testimonial topDivider />
      <Footer/>
    </>
  );
}

export default Home;