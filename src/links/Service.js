import HomePageImg from '../assests/kdr1.jpg';
import Footer from '../components/Footer';
import Pages from '../components/Pages';
import React from 'react'
import Trip from '../components/Trip';
import Nav from '../components/Nav';

function Service() {
  return (
    <div>
   <Nav></Nav>
    <Pages
   cName='abcd'
   heroIma={HomePageImg}
   title="Service"
   url='/service'
   btnclass='hide'
    ></Pages>
    <Trip></Trip>
    <Footer></Footer>
</div>
  )
}

export default Service