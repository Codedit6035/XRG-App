import React from 'react'
import Navbar from './components/Navbar/Navbar'
import Footer from './components/Footer/footer';
import HomePage from './pages/HomePage/homePage';
import AOS from "aos";
import "aos/dist/aos.css";


import { Route, Routes } from "react-router-dom"
import ContactPage from './pages/ContactPage/ContactPage';
import ServicesPage from './pages/ServicesPage/ServicesPage';
import IndustriesPage from './pages/IndustriesPage/IndustriesPage';
import AboutPage from './pages/AboutPage/AboutPage';



const App = () => {
  React.useEffect(() => {
    AOS.init({
      offset: 100,
      duration: 800,
      easing: "ease-in-sine",
      delay: 100,
    });
    AOS.refresh();
  }, []);
  return (
    <div className=''>
      <Routes>
          <Route path="/"  element={<HomePage   /> } />
          <Route path="/industries"  element={<IndustriesPage /> } />
          <Route path="/services" element={<ServicesPage  /> }/>
          <Route path="/about"  element={<AboutPage /> } />
          <Route path="/get in touch" element={<ContactPage  />  } />
        </Routes>
        <Footer/>


    </div>
  )
}

export default App