import { useState, useEffect } from 'react';
import './App.css';
import WeatherInfo from './component/WeatherInfo';
import CityButton from './component/CityButton';
import { HashLoader } from 'react-spinners';

// 1. 유저는 현재 위치의 날씨를 볼 수 있다.(지역, 온도, 날씨 상태)
// 2. 유저는 다른 도시의 버튼들을 볼 수 있다.
// 3. 유저는 다른 도시 버튼을 클릭하면 해당 도시의 날씨정보를 볼 수 있다.
// 4. 현재 위치 버튼을 누르면 다시 현재위치 기반의 날씨가 나온다.
// 5. 유저는 데이터가 로딩될 때 로딩 스피너를 볼 수 있다.

function App() {
  const [loading, setLoading] = useState(false);

  const [weather, setWeather] = useState(null);
  const [city, setCity] = useState('current');
  const [sunrise, setSunrise] = useState(null);
  const [sunset, setSunset] = useState(null);
  const [nowTime, setNowTime] = useState('');
  const cities = ['Current', 'Seoul', 'Daejeon', 'Daegu', 'Busan', 'Gwangju'];

  // 현재 위치정보 가져오는 Promise 리턴
  const getCurrentLocation = () => {
    return new Promise((resolve, reject) => {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const lat = position.coords.latitude;
          const lon = position.coords.longitude;
          resolve([lat, lon]);
        },
        (error) => {
          reject(error);
        }
      );
    });
  };

  // 위치정보 혹은 도시 기반으로 날씨 가져오기
  const getCurrentWeather = async (cityName) => {
    const API_KEY = '9d18f0f13c5084213dcd51daa21890f4';
    const [lat, lon] = await getCurrentLocation();
    let url = '';

    // 누른 버튼마다 다른 url 정보 저장
    if (cityName === 'current') {
      url = new URL(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&lang=kr&appid=${API_KEY}`);
    } else {
      url = new URL(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&units=metric&lang=kr&appid=${API_KEY}`);
    }

    // fetch(url)
    //   .then(response => {
    //     if (!response.ok) throw new Error(response.statusText);
    //     return response.json();
    //   })
    //   .then(json => {
    //     console.log('json:', json);
    //     setWeather(json);

    //     const localSunriseTime = calcUnixToLocalTime(json.sys.sunrise);
    //     setSunrise(localSunriseTime);

    //     const localSunsetTime = calcUnixToLocalTime(json.sys.sunset);
    //     setSunset(localSunsetTime);
    //   })
    //   .catch(error => alert('날씨 정보를 가져오는데 실패했습니다.\n', error));

      try {
        setLoading(true);
        const response = await fetch(url);
        if (!response.ok) throw new Error(response.statusText);
    
        const json = await response.json();
        // console.log('json:', json);
        setWeather(json);
    
        // 상태가 설정된 후에 sunrise와 sunset 시간을 계산
        const localSunriseTime = calcUnixToLocalTime(json.sys.sunrise);
        setSunrise(localSunriseTime);
    
        const localSunsetTime = calcUnixToLocalTime(json.sys.sunset);
        setSunset(localSunsetTime);
      } catch (error) {
        alert('날씨 정보를 가져오는데 실패했습니다.\n', error);
      } finally {
        setLoading(false);
      }
  };

  // unix(밀리세컨드)를 현재 시간으로 변경하는 함수
  const calcUnixToLocalTime = (unix) => {
    const date = new Date(unix * 1000);
    const hours = String(date.getHours()).padStart(2, '0');
    const minutes = String(date.getMinutes()).padStart(2, '0');
    const formattedTime = `${hours}:${minutes}`;

    return formattedTime;
  }

  // 현재 시간 받아오는 함수
  const getCurrentDateTime = () => {
    const now = new Date();

    const month = String(now.getMonth() + 1);
    const day = String(now.getDate()).padStart(2, '0');

    const hours = String(now.getHours()).padStart(2, '0');
    const minutes = String(now.getMinutes()).padStart(2, '0');

    const formattedTime = `${month}/${day} ${hours}:${minutes}`;

    return formattedTime;
  }

  // 앱 실행 시, 현재 위치의 날씨 볼 수 있다.
  useEffect(() => {
    async function fetchInitialData() {
      setLoading(true);
      const localTime = getCurrentDateTime();
      setNowTime(localTime);
  
      await getCurrentWeather(`${city}`);
      setLoading(false);
    }

    fetchInitialData();
  }, [city]);

  return (
    <div className="background">
      <div className="total-container">
        <CityButton cities={cities} setCity={setCity}/>
        <div className="divide-line top-line"></div>
        <main className="main-container">
          { loading ?
            (
              <HashLoader
                color="#4067f7"
                loading={loading}
                size={50}
              />
            ) :
            (
              <WeatherInfo weather={weather} sunrise={sunrise} nowTime={nowTime} sunset={sunset}/>
            )
          }
          
        </main>
      </div>
    </div>
  );
}

export default App;
