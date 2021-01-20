fetch("väder.json")
    .then(file => file.json())
    .then(file => {
        file.veckodagar.forEach(element => {

            let dayName = document.createElement("p");
            dayName.classList.add("fullName");
            dayName.textContent = element.dag;
            dayName.hidden = true;

            let dayNameShor = document.createElement("p");
            dayNameShor.classList.add("shortName");
            dayNameShor.textContent = dayShortening(element.dag);

            let dayTemp = document.createElement("p");
            dayTemp.textContent = element.temperatur;

            //dayTemp.classList.add(`${element.temperatur > 0 ? "warm" : "cold"}`);

            if (element.temperatur < 0) dayTemp.classList.add("cold");
            else if (element.temperatur < 25) dayTemp.classList.add("warm");
            else dayTemp.classList.add("hot");

            let dayWeatherBox = document.createElement("div");
            dayWeatherBox.classList.add("day-weather-box");
            dayWeatherBox.classList.add(`${!element.moln ? "sunny" : "cloudy"}`);

            dayWeatherBox.classList.add(`${!element.nederbörd ? "dry" : "rain"}`);

            if (element.temperatur < -20) dayWeatherBox.classList.add("freezing");
            else if (element.temperatur < 0) dayWeatherBox.classList.add("cold");
            else if (element.temperatur < 20) dayWeatherBox.classList.add("warm");
            else dayWeatherBox.classList.add("hot");

            dayWeatherBox.append(dayName);
            dayWeatherBox.append(dayNameShor);
            dayWeatherBox.append(dayTemp);
            addResizeEffect(dayWeatherBox);
            document.querySelector("main").append(dayWeatherBox);
        });
    });

function addResizeEffect(element) {
    element.addEventListener("mouseenter", event => {
        if (event.target.classList[0] == "day-weather-box") {
            event.target.style.width = "100px";
            event.target.classList.remove("box-out");
            event.target.classList.add("box-in");
            setTimeout(() => {
                if (event.target.querySelector(".shortName"))
                    event.target.querySelector(".shortName").hidden = true;
                if (event.target.querySelector(".fullName"))
                    event.target.querySelector(".fullName").hidden = false;
            }, 100);
        }
    });
    element.addEventListener("mouseout", event => {
        if (event.target.classList[0] == "day-weather-box") {
            setTimeout(() => {
                event.target.style.width = "320px";
                event.target.classList.remove("box-in");
                event.target.classList.add("box-out");
            }, 1000);
            setTimeout(() => {
                if (event.target.querySelector(".fullName"))
                    event.target.querySelector(".fullName").hidden = true;
                if (event.target.querySelector(".shortName"))
                    event.target.querySelector(".shortName").hidden = false;
            }, 1600);
        }
    });
}

function dayShortening(dayName) {
    switch (dayName) {
        case "måndag":
            return "mån";
            break;
        case "tisdag":
            return "tis";
            break;
        case "onsdag":
            return "ons";
            break;
        case "torsdag":
            return "tor";
            break;
        case "fredag":
            return "fre";
            break;
        case "lördag":
            return "lör";
            break;
        case "söndag":
            return "sön";
            break;
    }
}