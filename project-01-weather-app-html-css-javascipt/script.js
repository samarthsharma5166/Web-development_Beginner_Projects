const apikey = "7e6bc66d09d08a2b6cf30d00e87b4c99";
const apiurl = "https://api.openweathermap.org/data/2.5/weather?&units=metric&q=";
const cityname=document.getElementById("input");
const button = document.getElementById("btn");
const weathericon = document.querySelector(".weather-icon");
console.log(button);
async function checkweather(city){
    let response = await fetch(apiurl + city + `&appid=${apikey}`);
    if (response.status==404){
        document.querySelector(".error").style.display="block";
        document.querySelector(".weather").style.display="none";
    }else{
        let data = await response.json();
    console.log(data);
    document.querySelector(".city").innerHTML=data.name;
    document.querySelector(".temp").innerHTML= Math.round( data.main.temp) + "°c";
    document.querySelector(".Humidity").innerHTML=data.main.humidity + "%";
    document.querySelector(".wind").innerHTML=data.wind.speed + " Km/h";
    if(data.weather[0].main=="Clouds"){
        weathericon.src="./images/clouds.png"
    }
    else if(data.weather[0].main=="Clear"){
        weathericon.src="./images/clear.png"
    }
    else if(data.weather[0].main=="Drizzle"){
        weathericon.src="./images/drizzle.png"
    }
    else if(data.weather[0].main=="Mist"){
        weathericon.src="./images/mist.png"
    }
    else if(data.weather[0].main=="Rain"){
        weathericon.src="./images/rain.png"
    }
    document.querySelector(".weather").style.display="block";
    document.querySelector(".error").style.display="none";

    }
    
}
button.addEventListener("click", ()=>{
    console.log(cityname.value);
    checkweather(cityname.value);
});

