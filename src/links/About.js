
import HomePageImg from '../assests/2.jpg';
import React from 'react'
import Nav from '../components/Nav';
import Pages from "../components/Pages";
import Footer from "../components/Footer";
import AboutUs from "../components/AboutUs";


function About() {
  return (
    <div>
         <Nav></Nav>
         <Pages
         cName='abcd'
         heroIma={HomePageImg}
         title="About"
         url='/about'
         btnclass='hide'
         ></Pages>
         <AboutUs></AboutUs>
         <Footer></Footer>
    </div>
  )
}

export default About