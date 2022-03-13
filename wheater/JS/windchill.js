let t = 38
let s = 5
let sExponencial = s **0.16
let calculo = 35.74 + 0.6215 * t - 35.75 * sExponencial + 0.4275 * t * sExponencial
console.log(calculo)
let widthChill = Math.round(calculo)

if(t = 38){
    let text = widthChill + '°F Broken Clouds'
    document.querySelector('.broken').textContent = text
}


let temperature = t + '°F'
document.querySelector('#temperatura').textContent = temperature

let speed = s + 'mph'
document.querySelector('#windspeed').textContent = speed

