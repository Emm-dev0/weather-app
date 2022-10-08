let weather = { 
    apiKey : "5bad05a158e5764a9cf3ed1c0be7aeb1",
    fetchWeather: function (city) {
        fetch(
            'https://api.openweathermap.org/data/2.5/weather?q=' 
            + city 
            + '&appid=' 
            + this.apiKey
            ).then((response) => response.json())
            .then((data) => this.displayWeather(data));
            
    },

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
        console.log(data);
    },

    search: function () {
        this.fetchWeather(document.querySelector('.search-bar').value)
        console.log('done')
    },
};

const see = document.querySelector('.search button')addEventListener('click', function () {})