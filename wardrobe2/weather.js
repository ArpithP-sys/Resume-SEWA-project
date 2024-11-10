document.getElementById('getWeatherBtn').addEventListener('click', function() {
    fetch('https://api.openweathermap.org/data/2.5/weather?q=New%20Delhi&appid=YOUR_API_KEY')
    .then(response => response.json())
    .then(data => {
        const tempCelsius = (data.main.temp - 273.15).toFixed(2);
        let suggestion = '';

        if (tempCelsius > 30) {
            suggestion = 'It\'s hot! Wear light, breathable fabrics like cotton.';
        } else if (tempCelsius > 20) {
            suggestion = 'The weather is pleasant! Try comfortable clothing like t-shirts or shirts.';
        } else if (tempCelsius > 10) {
            suggestion = 'It\'s a bit chilly! Consider wearing a light jacket or sweater.';
        } else {
            suggestion = 'It\'s cold! Stay warm with a heavy jacket and layers.';
        }

        document.getElementById('weatherOutput').innerHTML = `
            <p>Temperature: ${tempCelsius}°C</p>
            <p>Suggestion: ${suggestion}</p>
        `;
    });
});
