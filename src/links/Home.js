import Nav from '../components/Nav';
import HomePageImg from '../assests/3.jpg';
import React from 'react'
import Pages from "../components/Pages";
import Destination from "../components/Destination";
import Trip from "../components/Trip";
import Footer from "../components/Footer";

function Home() {
  return (
    <div>
        <Nav></Nav>
         <Pages
         cName="homeimage"
         heroIma={HomePageImg}
         title="YOUR JOURNEY YOUR STORY"
         text="choose your favourite destination"
         url='/home'
         btnclass='show'
         buttonText="Travel Plane"
         ></Pages>
         <Destination/>
         <Trip></Trip>
         <Footer></Footer>
    </div>
    
  )
}

export default Home