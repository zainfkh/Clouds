/*let p = fetch('https://api.open-meteo.com/v1/forecast?latitude=52.52&longitude=13.41&current_weather=true&hourly=temperature_2m,relativehumidity_2m,windspeed_10m')
p.then((response)=>{
    //console.log(value1.status);
    console.log(response.headers);
    return response.json()
}).then((value2)=>{
    console.log(value2);
})*/

const getFormattedTime = (timestamp) => {
    const date = new Date(timestamp * 1000 ); // Convert timestamp to milliseconds
    const hours = date.getHours();
    const minutes = "0" + date.getMinutes();
    return hours + ":" + minutes.substr(-2);
  };

const getweather=(city)=>{
    cityName.innerHTML=city
const options = {
    method: 'GET',
    headers: {
        'X-RapidAPI-Key': '54cf5087e0msh9d77c847d91e9abp154f3fjsn0e727f1765a3',
        'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
    }
}

fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=' + city, options)
.then(response=>response.json())
.then((response)=>{
    
    const sunriseTime = getFormattedTime(response.sunrise);
    const sunsetTime = getFormattedTime(response.sunset);
    console.log(response)
    temp.innerHTML  = response.temp
    feels_like.innerHTML = response.feels_like
    humidity.innerHTML = response.humidity
    min_temp.innerHTML = response.min_temp
    max_temp.innerHTML = response.max_temp
    wind_speed.innerHTML = response.wind_speed
    wind_degrees.innerHTML = response.wind_degrees
    sunrise.innerHTML = sunriseTime; 
    sunset.innerHTML = sunsetTime; 


})

.catch(err=> console.error(err))
}
submit.addEventListener("click",(e)=>{
    e.preventDefault();
    getweather(city.value)
})
getweather("Islamabad")