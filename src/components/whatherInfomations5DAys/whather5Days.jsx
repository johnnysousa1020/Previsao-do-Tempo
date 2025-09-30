import './Whather5DAys.css'

function WhatherINformations5Days({weather5Days}){

   console.log(weather5Days)

   let dailyforecast = {}

   for(let forecast of weather5Days.list){
    const date = new Date(forecast.dt * 1000).toLocaleDateString()

    if(!dailyforecast[date]){
       dailyforecast[date] = forecast
    }
    
   }

 const next5Daysforecast = Object.values(dailyforecast).slice(1,6)

 function coverteDate(date){
    const newDate = new Date(date.dt * 1000).toLocaleDateString('pt-br', { weekday: 'long', day: '2-digit'})

    return newDate
 }


    return(
        <div className='container-weather'>
            <h3>Previsão Próximos 5 Dias</h3>
            <div className='weather-list'>
            {next5Daysforecast.map(forecast => (
               <div key={forecast.dt} className='weather-item'>
                   <p className='forecast-day'>{coverteDate(forecast)}</p>
                   <img src={`http://openweathermap.org/img/wn/${forecast.weather[0].icon}.png`}/>
                   <p className='forecast-description'>{forecast.weather[0].description}</p>
                   <p>{Math.round (forecast.main.temp_min)}ºC min / {Math.round (forecast.main.temp_max)}ºC máx</p>
               </div>
            ))}
            </div>
        </div>
    )
}


export default WhatherINformations5Days