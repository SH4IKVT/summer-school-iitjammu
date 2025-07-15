const apiKey = "da34d717c5fbdd51a8a534ec3c23747f"; 
let isCelsius = false;
const modeBtn = document.getElementById("mode")
modeBtn.addEventListener("click", () => {
  localStorage.removeItem("weatherData");
  isCelsius = !isCelsius;
  document.getElementById("getWeatherBtn").click();
})
document.getElementById("getWeatherBtn").addEventListener("click", () => {
  modeBtn.style.display = "block";
  const resultDiv = document.getElementById("weatherResult");
  resultDiv.innerHTML = "Fetching weather...";

  if (!navigator.geolocation) {
    resultDiv.innerHTML = "<p class='error'>Geolocation is not supported.</p>";
    return;
  }

  navigator.geolocation.getCurrentPosition(
    async (position) => {
      const lat = position.coords.latitude;
      const lon = position.coords.longitude;

      try {
        let data = localStorage.getItem("weatherData") && JSON.parse(localStorage.getItem("weatherData"));
        console.log(data);
        if(!data){
          const response = await fetch(
          `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}&units=${isCelsius ? "metric" : "imperial"}`
        );

        if (!response.ok) {
           throw new Error("API Error");
        }
        data = await response.json();
        
        localStorage.setItem("weatherData", JSON.stringify(data))
      }
        const temp = data.main.temp;
        const city = data.name;
        const condition = data.weather[0].description;
         const iconCode = data.weather[0].icon;
        const iconUrl = `http://openweathermap.org/img/wn/${iconCode}@2x.png`;
        resultDiv.innerHTML = `
          <img src="${iconUrl}" alt=${condition}>
          <p><strong>${city}</strong></p>
          <p>${temp}°C</p>
          <p>${condition}</p>
        `;
      } catch (error) {
        modeBtn.style.display = "none";
        resultDiv.innerHTML = `<p class="error">Failed to fetch weather data.</p>`;
      }
    },
    (error) => {
      modeBtn.style.display = "none";
      resultDiv.innerHTML = `<p class="error">Location access denied.</p>`;
    }
  );
});

