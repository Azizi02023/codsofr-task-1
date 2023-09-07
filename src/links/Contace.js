
import Pages from '../components/Pages'
import React from 'react'
import HomePageImg from '../assests/1.jpg'
import Footer from '../components/Footer'
import ContactFrom from '../components/ContactFrom'
import Nav from '../components/Nav'
function Contace() {
  return (
    <div>
         <Nav></Nav>
         <Pages
        cName='abcd'
        heroIma={HomePageImg}
        title="Contact"
        url='/contace'
        btnclass='hide'
         ></Pages>
         <ContactFrom></ContactFrom>
         <Footer></Footer>
    </div>
  )
}

export default Contace