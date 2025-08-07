// Time and Date
function updateDateTime() {
  const now = new Date();

  // Convert to Eastern European Time (EET)
  const options = {
    timeZone: 'Europe/Bucharest',
    hour12: true,
    hour: 'numeric',
    minute: '2-digit',
    second: '2-digit',
    day: '2-digit',
    month: 'short',
    year: 'numeric'
  };

  const formatter = new Intl.DateTimeFormat('en-US', options);
  const parts = formatter.formatToParts(now);
  
  const datePart = `${parts.find(p => p.type === 'day').value} ${parts.find(p => p.type === 'month').value} ${parts.find(p => p.type === 'year').value}`;
  const timePart = `${parts.find(p => p.type === 'hour').value}:${parts.find(p => p.type === 'minute').value}:${parts.find(p => p.type === 'second').value} ${parts.find(p => p.type === 'dayPeriod').value} EET`;

  document.getElementById("datetime").textContent = `${datePart} | ${timePart}`;
}

setInterval(updateDateTime, 1000);
updateDateTime();

// Weather using OpenWeatherMap API (you need your own API key)
const apiKey = 'YOUR_API_KEY'; // <-- replace with your actual API key
const city = 'Bucharest';

async function fetchWeather() {
  try {
    const res = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`);
    const data = await res.json();
    const temp = Math.round(data.main.temp);
    const description = data.weather[0].description;
    document.getElementById("weather").textContent = `Weather: ${temp}°C, ${description}`;
  } catch (error) {
    document.getElementById("weather").textContent = "Weather: N/A";
  }
}

fetchWeather();
setInterval(fetchWeather, 600000); // Update every 10 minutes

// Hamburger functionality
document.getElementById("hamburger").addEventListener("click", () => {
  alert("Hamburger menu clicked - add your menu toggle here.");
});
