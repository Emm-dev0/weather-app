let weather = { 
    apiKey : "5bad05a158e5764a9cf3ed1c0be7aeb1",
    fetchWeather: function (city) {
        fetch(
            'https://api.openweathermap.org/data/2.5/weather?q=' 
            + city 
            + '&appid=' 
            + this.apiKey
            ).then((response) => response.json())
            .then((data) => console.log(data));
    },

    displayWeather: function(data) {
        const { name } = data;
        const { icon, description } = data.weather;
        const { temp, humidity } = data.main;
        const { speed } = data.wind;

    }
};