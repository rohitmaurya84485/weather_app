const apiKey="d72c27bea827b8400b71566ac6e7caf8";
const getWeather = async(city)=>{
    return await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`)
    .then((res)=>res.json())
    .then ((json) =>{
return json;
    })
}


export default getWeather;