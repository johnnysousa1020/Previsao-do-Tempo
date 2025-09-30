import { useState, useRef } from 'react'
import axios from 'axios'
import './App.css'
import WhatherINformations from './components/WhatherInfomatios/WhatherInfomations'
import WhatherINformations5Days from './components/whatherInfomations5DAys/whather5Days'


function App() {
  const [weather, setWeather] = useState()
  const [weather5Days, setWeather5Days] = useState()

  const inputRef = useRef()

 async function searchCity(){
     const city = inputRef.current.value
     const key = "495879c50f3b23ee32ae61cefaf333b1"
     const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${key}&lang=pt_br&units=metric`
     const url5day = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${key}&lang=pt_br&units=metric`

     const apiInfo = await axios.get(url)
     const apiInfo5Day = await axios.get(url5day)

     setWeather5Days(apiInfo5Day.data)
     setWeather(apiInfo.data)

  }

  return (
    <div className='container'>
     <h1>Previsão do tempo</h1>
     <input ref={inputRef} type="text" placeholder='Digite o nome da cidade'/>
     <button onClick={searchCity}>Buscar</button>

     {weather && <WhatherINformations weather={weather}/>}
     {weather5Days && <WhatherINformations5Days weather5Days={weather5Days}/>}
    </div>
  )
}

export default App
