import React from 'react'
import Header from '../components/Header/Header';
import Nav from './Nav/Nav';
import About from './About/About';
import Experience from './Experience/Experience';
import Testimonials from './Testimonials/Testimonials';
import Services from './Services/Services';
import Portfolio from './Portfolio/Portfolio';
import Contact from './Contacts/Contact';
import Footer from './Footer/Footer';

const App = () => {
  return (
    <>
    <Header />
    <Nav/>
    <About/>
    <Experience/>
    <Services/>
    <Portfolio/>
    <Testimonials/>
    <Contact/>
    <Footer/>
    </>
  )
}

export default App;
