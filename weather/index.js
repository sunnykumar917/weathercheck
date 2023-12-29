var inputValue =document.querySelector('#city');
var btn = document.querySelector('#add');
var city = document.querySelector('#cityoutput');
var descrip = document.querySelector('#description');
var temp = document.querySelector('#temp');
var wind = document.querySelector('#wind');
apik="72f42b820b569c74f81bfc76b94e8ac4"
function conversion(val)
{
    return(val-273).toFixed(3)
} 
btn.addEventListener('click', function()
{
    fetch('https://api.openweathermap.org/data/2.5/weather?q='+inputValue.value+'&appid='+apik)
    .then(res => res.json())

    .then(data =>
        {
            var nameval = data['name']
            var descrip = data['weather']['0']['description']
            var tempature = data['main']['temp']
            var wndspeed = data['wind']['speed']

            city.innerHTML = `Weather of <span>${nameval} </span>`
            temp.innerHTML = `Temperature:<span>${conversion(tempature)}</span>`
            wind.innerHTML = `Wind Speed:<span>${wndspeed}</span>`
            description.innerHTML = `Sky Conditions: <span>${descrip}</span>`
        })
        .catch(err => alert('You entered Wrong city name'))
    })
