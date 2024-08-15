import React from 'react'
import { useState } from 'react'
import './CityButton.css'

const CityButton = ({ cities, setCity }) => { 
  const [activeButton, setActiveButton] = useState(0);

  const handleClick = (city, index) => {
    if (city === 'Current') {
      setCity('current');
    } else {
      setCity(city);
    }
    setActiveButton(index);
  };

  return (
    <div className="city-button">      
      {cities.map((city, index) => (
        <button
          key={index}
          onClick={() => handleClick(city, index)}
          className={activeButton === index ? 'active' : ''}
        >
          {city}
        </button>
      ))}
    </div>
  )
}

export default CityButton