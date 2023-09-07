import React from 'react';
import './Trip.css';
import TripData from "../components/TripData";
import KDRI from "../assests/Kand.jpg";
import BI from "../assests/Bamian.jpg";
import KI from "../assests/Kabul.jpg";

function Trip() {
  return (
    <div className="tripa">
      <h1>Provinces to Visit</h1>
      <p>Top places to visit in the country you will enjoy then must visit</p>
      <div className='cardoftripdata'>
        <TripData
          image={KDRI}
          heading="Kandahar"
          text="Kandahar is a city in southern Afghanistan known for its rich cultural heritage and historical sites. The city is home to the ancient town of Arghandab, which dates back to the 1st century AD, and the Tomb of Ahmad Shah Durrani, the founder of the Afghan state. The ancient city of Arghandab is a well-preserved site that offers visitors a glimpse into Afghanistan's rich history."
        />

        <TripData
          image={KI}
          heading="Kabul"
          text="Kabul, the capital of Afghanistan, has a rich and diverse history. Despite the recent years of conflict, Kabul still has much to offer visitors, including historical monuments, such as the Darul Aman Palace and the Babur Garden, and several museums, including the National Museum of Afghanistan. The Darul Aman Palace is a historical palace located on the outskirts of Kabul, 
          ."
        />

        <TripData
          image={BI}
          heading="Bamiyan"
          text="Bamiyan is a province in central Afghanistan, famous for its two towering Buddhas carved into the cliffs of the Bamiyan Valley. Unfortunately, these ancient statues, which once stood over 50 meters tall, were destroyed by the Taliban in 2001. However, the Bamiyan Valley is still worth visiting for its stunning natural beauty, including the turquoise blue Band-e Amir lakes."
        />
      </div>
    </div>
  );
}

export default Trip;
