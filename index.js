const apiKey = "d44a7a1371cace8bcfd668b52f9c1896";
const apiUrl = `https://api.openweathermap.org/data/2.5/weather?units=metric&q=bangalore`;

async function checkWeather() {
	const resp = await fetch(apiUrl + `&appid=${apiKey}`);
	let data = await resp.json();

	document.querySelector(".city").innerHTML = data.name;
	document.querySelector(".temp").innerHTML = data.main.temp;
	document.querySelector(".humidity").innerHTML = data.main.humidity;
	document.querySelector(".wind").innerHTML = data.wind.speed;
	console.log(data);
}

checkWeather();
