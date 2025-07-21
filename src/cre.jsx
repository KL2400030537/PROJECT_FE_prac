// AboutMe.jsx
import React, { Component } from 'react';
import './cre.css'
import ManhwaCard from './Manhwacard';

class AboutMe extends Component {
  render() {
    return (
      <div>
        <h1 class='title'>MANHWA MONARC</h1>
       <div className="card-container">
        <ManhwaCard
          name="Nano Machine"
          rating="4.8/5"
          image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT2O5exQRPM_iXYmkfqbHTi04UE86NwOHKIGw&s"
        />
        <ManhwaCard
          name="Solo Leveling"
          rating="4.9/5"
          image="https://upload.wikimedia.org/wikipedia/en/8/88/Solo_Leveling_vol_1.jpg"
        />
        <ManhwaCard
          name="Return of the Mount Hua Sect"
          rating="4.7/5"
          image="https://i.pinimg.com/564x/f7/ff/6d/f7ff6d3f953bfe2430f58e1b2143ee87.jpg"
        />
        <ManhwaCard
          name="Tomb Raider King"
          rating="4.6/5"
          image="https://upload.wikimedia.org/wikipedia/en/0/05/Tomb_Raider_King.jpg"
        />
        </div>
      </div>
    );
  }
}

export default AboutMe;
