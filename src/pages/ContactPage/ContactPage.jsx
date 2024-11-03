import React from 'react'
import ContactS from '../../components/Contact section/ContactS'
import Navbar from '../../components/Navbar/Navbar'

const ContactPage = () => {
  return (
    <div>
      <div className="  top-0 left-0 w-full z-20 bg-slate-950 ">
        <Navbar titreColor={'white'}/> {/* This is your existing Navbar component */}
      </div>
      <ContactS/>
    </div>
  )
}

export default ContactPage