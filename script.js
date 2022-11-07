let weather = {
    apiKey: "53eb4828ee78c6eae5d64b4619392475",
    fetchWeather: function(city){
        fetch(
            "https://api.openweathermap.org/data/2.5/weather?q="+city+"&units=metric&appid="+ this.apiKey
            
        ).then((response) => {
            if (!response.ok) {
                alert("No weather found. Please Check Your Spelling and Try Again");
              }
              return response.json();
        })
        .then((data) => this.displayWeather(data))
    },

    displayWeather: function(data){
        const{name} = data;
        const {icon , description } = data.weather[0];
        const{temp, humidity} = data.main;
        const{speed} = data.wind;

        console.log(name,icon,description,temp,humidity,speed);

        document.querySelector(".city").innerText = "Weather in " + name;
        document.querySelector(".icon").src = "https://openweathermap.org/img/wn/"+ icon +"@2x.png";
        document.querySelector(".description").innerText = description;
        document.querySelector(".temp").innerText = temp + "°C"
        document.querySelector(".humidity").innerText = "Humidty: " + humidity + "%"
        document.querySelector(".wind").innerText = "Wind Speed: " + speed + " km/h"
        document.body.style.backgroundImage = "url('https://source.unsplash.com/random/?"+name+"')";
    },
    search: function(){
        this.fetchWeather(document.querySelector(".search-bar").value);
    }


};

document.querySelector(".search button").addEventListener("click", function(){
    weather.search();

});

document.querySelector(".search-bar").addEventListener("keyup", function(event){
    if(event.key == "Enter"){
        weather.search();
    }
});

weather.fetchWeather("Denver");