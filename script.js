fetch("väder.json")
.then(file => file.json())
.then(data => {
    console.log(data.veckodagar)
    data.veckodagar.forEach(element => {

        dayName = document.createElement("p");
        dayName.textContent = element.dag;

        dayTemp = document.createElement("p");
        dayTemp.textContent = element.temperatur;
        dayTemp.classList.add(`${element.temperatur > 0 ? "warm" : "cold"}`);

        let dayWeatherBox = document.createElement("div");
        dayWeatherBox.classList.add("day-weather-box");
        dayWeatherBox.classList.add(`${!element.moln ? "sunny" : "cloudy"}`);
        
        dayWeatherBox.classList.add(`${!element.nederbörd ? "dry" : "rain"}`);
        dayWeatherBox.append(dayName);
        dayWeatherBox.append(dayTemp);
        
        document.querySelector("main").append(dayWeatherBox);
    });
});