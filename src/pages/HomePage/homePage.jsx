import React from 'react'
import Hero from '../../components/Hero/Hero'
import Services from '../../components//Services section/Services';
import What from '../../components/What section/What.jsx';
import IndustriesS from '../../components/Industries section/IndustriesS.jsx';
import ContactS from '../../components/Contact section/ContactS';
import Footer from '../../components/Footer/footer';
import Image from '../../assets/About/ghasi.jpeg'

const HomePage = () => {
  return (
    <div>
      <Hero/>
      <What imageUrl={Image} />
      <Services/>
      <IndustriesS/>
      <ContactS/>       
    </div>
  )
}

export default HomePage