const apiKey = "434536dcfa93d3f231e8cd8084591b59";
    const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
    const searchBox = document.querySelector(".search input");
    const searchBtn = document.querySelector(".search button");
    const weatherIcon = document.querySelector(".weather-icon");
    const card = document.querySelector(".card");

    async function  checkWeather(city){
        const response = await fetch(apiUrl + city + `&appid=${apiKey}`);
        var data = await response.json();


        console.log(data);

        document.querySelector(".city").innerHTML = data.name;
        document.querySelector(".temp").innerHTML = Math.round(data.main.temp)  + "°c";
        document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
        document.querySelector(".wind").innerHTML = data.wind.speed + " km/h";
    
        if(data.weather[0].main == "Clouds"){
            weatherIcon.src = "images/clouds.png";
            document.querySelector('.card').style.background = "linear-gradient(to bottom, #87CEEB, #FFD700)";
        }else if(data.weather[0].main == "Clear"){
            weatherIcon.src = "images/clear.png";
            document.querySelector('.card').style.background = "linear-gradient(to bottom, #B0C4DE, #708090)";
        }else if(data.weather[0].main == "Rain"){
            weatherIcon.src = "images/rain.png";
            document.querySelector('.card').style.background = "linear-gradient(to bottom, #B0C4DE, #708090)";
        }else if(data.weather[0].main == "Drizzle"){
            weatherIcon.src = "images/drizzle.png";
            document.querySelector('.card').style.background = "linear-gradient(to bottom, #B0C4DE, #708090)";
        }else if(data.weather[0].main == "Mist"){
            weatherIcon.src = "images/mist.png";
            document.querySelector('.card').style.background = "linear-gradient(to bottom, #E0E0E0, #FFFFFF)";
        }
    }

    searchBtn.addEventListener("click", ()=>{
        checkWeather(searchBox.value);
    })