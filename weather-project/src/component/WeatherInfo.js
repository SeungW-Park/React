import React from 'react'
import './WeatherInfo.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWind, faGlassWater, faSun, faMoon } from '@fortawesome/free-solid-svg-icons';

const WeatherInfo = ({ weather, sunrise, nowTime, sunset }) => {

  return (
    <div className="main-wrapper">
      <section className="location-time">
        <div className="current-location">위치 : {weather?.name}</div>
        <div className="current-time">현재 : {nowTime}</div>
      </section>
      <section className="main-weather">
        <div className="icon-weather">
          <img src={`https://openweathermap.org/img/wn/${weather?.weather[0].icon}@2x.png`} alt="날씨 아이콘"></img>
          <div className="weather">{weather?.weather[0].description}</div>
        </div>
        <div className="temp-unhappy">
          <div className="temp">{weather?.main.temp}°C</div>
          <div className="unhappy">체감온도 : {weather?.main.feels_like}°C</div>
        </div>
      </section>
      <section className="sub-weather">
        <div className="wind-info">
          <div className='sub-icon'>
            <FontAwesomeIcon icon={faWind} size="2x"/>
          </div>
          <div className="wind-direction info-title">풍향 : {weather?.wind.deg}°</div>
          <div className="wind-velocity info-value">{Math.floor(weather?.wind.speed * 10) / 10}m/s</div>
        </div>
        <div className="humidity-info">
          <div className='sub-icon'>
            <FontAwesomeIcon icon={faGlassWater} size="2x"/>
          </div>
          <div className="humidity-title info-title">습도</div>
          <div className="humidity-value info-value">{weather?.main.humidity}%</div>
        </div>
        <div className="rain-info">
          <div className='sub-icon'>
            <FontAwesomeIcon icon={faSun} size="2x"/>
          </div>
          <div className="rain-title info-title">일출시간</div>
          <div className='rain-value info-value'>{sunrise}</div>
        </div>
        <div className="rain-info">
          <div className='sub-icon'>
            <FontAwesomeIcon icon={faMoon} size="2x"/>
          </div>
          <div className="rain-title info-title">일몰시간</div>
          <div className='rain-value info-value'>{sunset}</div>
        </div>
      </section>
    </div>
  )
}

export default WeatherInfo