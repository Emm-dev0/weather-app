const seen = document.querySelector('.search-button');
let weather = { 
    apiKey : "5bad05a158e5764a9cf3ed1c0be7aeb1",

    // fetches weather details from an api
    fetchWeather: function (city) {
        fetch(
            'https://api.openweathermap.org/data/2.5/weather?q=' 
            + city 
            + '&appid=' 
            + this.apiKey
            ).then((response) => response.json())
            .then((data) => this.displayWeather(data));
            
    },
    //edit and updates required weather informations from the fetched api
    displayWeather: function(data) {
        const { name } = data;
        const { icon, description } = data.weather[0];
        const { temp, humidity } = data.main;
        const { speed } = data.wind;
        document.querySelector('.city').innerText = "Weather in " + name;
        document.querySelector('.icon').src = 'https://openweathermap.org/img/wn/' + icon + '.png';
        document.querySelector('.temp').innerText = temp + '°C';
        document.querySelector('.description').innerText = description;
        document.querySelector('.humidity').innerText = ' Humidity: ' + humidity + '%';
        document.querySelector('.wind').innerText = ' wind speed: ' + speed + 'Km/hr';
        document.querySelector('.weather').classList.remove('loading');
        // document.body.style.backgroundImage = URL("https://images.unsplash.com/photo-1493612276216-ee3925520721?ixlib=rb-1.2.1&dpr=1&auto=format&fit=crop&w=463&h=363.1372549019608&q=60")
        console.log(data);
        console.log(document.querySelector('.search-bar').value)
    },

    // takes input from the search bar
    search: function() {
        this.fetchWeather(document.querySelector('.search-bar').value);  
    }
};
// activates the search button
function see() {
    weather.search();
    console.log('done')
}
 seen.addEventListener("click", see);
// if (see) {
//    // see.addEventListener('keyup', function(event) {
//    //     if (event.key == 'Enter') {
//    //         weather.search();
//    //     }
//    // })
// }
  


weather.fetchWeather('Nigeria');