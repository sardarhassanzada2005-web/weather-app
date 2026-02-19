
const searchValue = document.getElementById('searchValue');
const city = document.getElementById('city');
const temperature = document.getElementById('temperature');
const description = document.querySelector('.description');
const clouds = document.getElementById('clouds');
const humidity = document.getElementById('humidity');
const pressure = document.getElementById('pressure');
const form = document.querySelector('form');
const main = document.querySelector('main');


form.addEventListener('submit' ,(e)=> {
    e.preventDefault()
    if(searchValue.value != ''){
        searchWeather();
    }
})

let id = '8cbc9650bb4b1258a753058ee6798083';
let url = 'https://api.openweathermap.org/data/2.5/weather?units=metric&appid='+id;

const searchWeather = () =>{
    fetch(url + '&q=' + searchValue.value)
    .then(responsive => responsive.json())
    .then(data => {
        console.log(data)
        if(Number(data.cod) === 200){
            const country = data.sys.country.toLowerCase();
            city.querySelector('figcaption').innerText = data.name;
            city.querySelector('img').src =`https://flagsapi.com/w40/${country}.png`;
            temperature.querySelector('img').src =`https://openweathermap.org/img/wn/${data.weather[0].icon}'@4x.png`;
            temperature.querySelector('figcaption span').innerText = data.main.temp;
            description.innerText = data.weather[0].description;
            clouds.innerText = data.clouds.all;
            humidity.innerText = data.main.humidity;
            pressure.innerText = data.main.pressure;
        }else{
            // false
            main.classList.add('error');
            setTimeout(() => {
                main.classList.remove('error');
            }, 1000);
        }
        searchValue.value = '';
    })
}

const initApp = () => {
    searchValue.value = 'Magdeburg'
    searchWeather();
}
initApp()