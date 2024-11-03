import React from 'react'
import BannerAb from '../../components/About Me/BannerAb'
import GhaziSection from '../../components/About Me/GhaziSection'

const AboutPage = ({titreColor}) => {
  return (
    <div>
      <BannerAb titreColor={titreColor}/>
      <GhaziSection/>

    </div>
  )
}

export default AboutPage