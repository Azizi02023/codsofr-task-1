import Abcde from '../assests/home.jpg';
import Abcdef from '../assests/KDR.jpg';
import Abcde3 from '../assests/Kuner.jpg';
import Abcdef4 from '../assests/kdr1.jpg';

import './Destination.css';
import React from 'react';
import DestinationData from './DestinationData';

function Destination() {
  return (
    <div className='destination'>
      <h1>Destination, Places</h1>
      <p>These are beautiful places in our country. If you visit, you will want to come again too.</p>
     <DestinationData
      className='first-dess'
      heading="Information"
      img1={Abcde}
      img2={Abcdef}
      text = " Welcome to a land of enchantment and wonder, where every step you take unveils breathtaking vistas and unforgettable experiences. Our country boasts a plethora of captivating destinations that are bound to leave an indelible mark on your heart and soul. From pristine natural landscapes to rich historical sites, there's something for every traveler seeking to explore the finest our nation has to offer."
     />

     <DestinationData
       className='first-reverse'
      heading="The Beauties"
      img1={Abcde3}
      img2={Abcdef4}
      text = "Lush, emerald canopies of ancient trees create a cathedral-like canopy overhead, filtering sunlight into a soft, dappled dance that plays upon the ground below. Each step taken releases a delicate symphony of rustling leaves and tender twigs, as if the earth itself sings its welcoming melody. Wildflowers of every hue burst forth from hidden corners, painting the landscape with strokes of vibrant reds, blues, and yellows, their petals like delicate brushes upon a canvas."
     />
     
     
    </div>

    
  );
}

export default Destination;
