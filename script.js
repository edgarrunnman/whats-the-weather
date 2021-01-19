fetch("väder.json")
.then(file => file.json())
.then(file => {
    file.veckodagar.forEach(element => {

        let dayName = document.createElement("p");
        dayName.textContent = element.dag;

        let dayTemp = document.createElement("p");
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