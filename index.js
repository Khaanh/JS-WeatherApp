const apiKey = "d44a7a1371cace8bcfd668b52f9c1896";
const apiUrl = `https://api.openweathermap.org/data/2.5/weather?units=metric&q=`;
const searchBox = document.querySelector(".search-input");
const searchBtn = document.querySelector(".search-btn");
const weatherIcon = document.querySelector(".weather-icon");
const weatherBlock = document.querySelector(".weather");
const errorBlock = document.querySelector(".error");
const imgUrl = "/images/";

async function checkWeather(city) {
	const resp = await fetch(apiUrl + `${city}&appid=${apiKey}`);
	let data = await resp.json();

	if (resp.status == 404) {
		errorBlock.classList.remove("hidden");
		weatherBlock.classList.add("hidden");
	}

	document.querySelector(".city").innerHTML = data.name;
	document.querySelector(".temp").innerHTML = `${Math.round(data.main.temp)}°c`;
	document.querySelector(".humidity").innerHTML = `${data.main.humidity}%`;
	document.querySelector(".wind").innerHTML = `${data.wind.speed} km/h`;

	switch (data.weather[0].main.toLowerCase()) {
		case "clouds":
			weatherIcon.src = `${imgUrl}clouds.png`;
			break;
		case "drizzle":
			weatherIcon.src = `${imgUrl}drizzle.png`;
			break;
		case "rain":
			weatherIcon.src = `${imgUrl}rain.png`;
			break;
		case "snow":
			weatherIcon.src = `${imgUrl}snow.png`;
			break;
		case "wind":
			weatherIcon.src = `${imgUrl}wind.png`;
			break;
		case "clear":
			weatherIcon.src = `${imgUrl}clear.png`;
			break;
		default:
			weatherIcon.src = `${imgUrl}notFound.png`;
	}

	weatherBlock.classList.remove("hidden");
	errorBlock.classList.add("hidden");
}

searchBtn.addEventListener("click", () => {
	checkWeather(searchBox.value);
});
