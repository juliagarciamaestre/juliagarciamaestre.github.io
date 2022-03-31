const apiURL = "https://api.openweathermap.org/data/2.5/weather?id=5604473&units=imperial&appid=e359fca7add1cc64c4539c515a2afe5b"
fetch(apiURL)
    .then((response) => response.json())
    .then((jsObject) => {
        // console.log(jsObject);
        const desc = jsObject.weather[0].description;
        document.querySelector("#temperatura").textContent = desc;
        const highT = jsObject.main.temp;
        document.getElementById("High").textContent = highT + "°F";
        const humidity = jsObject.main.humidity;
        document.getElementById("humidity").textContent = humidity + "%";
        const windSpeed = jsObject.wind.speed;
        document.getElementById("windspeed").textContent = windSpeed + "mph";
        let sExponencial = windSpeed **0.16
        let calculo = 35.74 + 0.6215 * highT - 35.75 * sExponencial + 0.4275 * highT * sExponencial
        let widthChill = Math.round(calculo)

        if (highT > 38){
            let text = widthChill + '°F Broken Clouds'
            document.querySelector('.broken').textContent = text
        }
    })
const forecastApiUrl ="https://api.openweathermap.org/data/2.5/forecast?id=5604473&units=imperial&appid=e359fca7add1cc64c4539c515a2afe5b"
fetch(forecastApiUrl)
    .then((response) => response.json())
    .then((jsObject) => {
        // console.log(jsObject);
        // const days = [
        //     "Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"
        // ]; //Is not workign as spected, tried other solutions later...
        const forecastTemperature = jsObject["list"].filter((temp) => {
            if (temp.dt_txt.includes("18:00:00")) {
                return temp;
            }
        })
            for (let i = 0; i < forecastTemperature.length; i++ ){
                // let day = document.getElementsByClassName("day-h")
                // day.textContent = days[new Date(forecastTemperature[i].dt_txt).getDay()]
                // console.log(day) //Is not working as spected, tried other solution later...
                let dayTemperature = forecastTemperature[i].main.temp;  //This is only working with the first one
                document.querySelector(".day-tem").textContent = dayTemperature + "°F"
                // console.log(dayTemperature);    
            }
    })

// let t = 38
// let s = 5
// let sExponencial = s **0.16
// let calculo = 35.74 + 0.6215 * t - 35.75 * sExponencial + 0.4275 * t * sExponencial
// console.log(calculo)
// let widthChill = Math.round(calculo)

// if(t = 38){
//     let text = widthChill + '°F Broken Clouds'
//     document.querySelector('.broken').textContent = text
// }


// let temperature = t + '°F'
// document.querySelector('#temperatura').textContent = temperature

// let speed = s + 'mph'
// document.querySelector('#windspeed').textContent = speed

