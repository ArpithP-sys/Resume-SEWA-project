// Initialize the wardrobe array
let wardrobe = [];

// Function to add a new wardrobe item
function addWardrobeItem() {
    const newItem = document.getElementById('wardrobeItem').value.trim();
    if (newItem === '') {
        alert('Please enter a valid clothing item.');
        return;
    }

    if (wardrobe.includes(newItem.toLowerCase())) {
        document.getElementById('duplicateWarning').textContent = 'You already have this item in your wardrobe!';
        return;
    }

    document.getElementById('duplicateWarning').textContent = '';
    wardrobe.push(newItem.toLowerCase());
    displayWardrobe();
    document.getElementById('wardrobeItem').value = '';
}

// Function to display wardrobe items dynamically
function displayWardrobe() {
    const wardrobeGrid = document.getElementById('wardrobeGrid');
    wardrobeGrid.innerHTML = ''; // Clear existing items
    wardrobe.forEach(item => {
        const itemDiv = document.createElement('div');
        itemDiv.className = 'wardrobe-item';
        itemDiv.textContent = capitalizeFirstLetter(item);
        wardrobeGrid.appendChild(itemDiv);
    });
}

// Helper function to capitalize the first letter of a string
function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

// Function for personalized outfit suggestions
function getPersonalizedSuggestions() {
    const suggestions = [
        'Wear a blue shirt for a casual day.',
        'Pair your jeans with a light hoodie.',
        'Try sneakers with that jacket for an easygoing look!'
    ];
    const output = document.getElementById('suggestionsOutput');
    output.innerHTML = '<ul>' + suggestions.map(s => `<li>${s}</li>`).join('') + '</ul>';
}

// Weather-based outfit suggestion
document.getElementById('getWeatherBtn').addEventListener('click', function() {
    const apiKey = 'YOUR_API_KEY'; // Replace with your actual API key
    const city = 'New Delhi'; // You can modify this to accept user input

    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`)
    .then(response => {
        if (!response.ok) {
            throw new Error(`Error ${response.status}: ${response.statusText}`);
        }
        return response.json();
    })
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
    })
    .catch(error => {
        console.error('Error fetching weather data:', error);
        document.getElementById('weatherOutput').textContent = 
            'Unable to retrieve weather data. Please try again later.';
    });
});

// Inventory Tracker: Add items to the inventory table
document.getElementById('add-item-btn').addEventListener('click', function() {
    const itemName = document.getElementById('item-name').value.trim();
    const quantity = document.getElementById('quantity').value;
    const category = document.getElementById('category').value.trim();

    if (!itemName || !quantity || !category) {
        alert('Please fill in all fields.');
        return;
    }

    const inventoryList = document.getElementById('inventory-list');
    const row = document.createElement('tr');
    row.innerHTML = `
        <td>${capitalizeFirstLetter(itemName)}</td>
        <td>${quantity}</td>
        <td>${capitalizeFirstLetter(category)}</td>
    `;
    inventoryList.appendChild(row);

    // Clear input fields after adding item
    document.getElementById('item-name').value = '';
    document.getElementById('quantity').value = '';
    document.getElementById('category').value = '';
});

// Close the form (optional function if required in your design)
function closeform() {
    document.getElementById('additem').style.display = 'none';
}

// Open the form (optional function if required in your design)
function openform() {
    document.getElementById('additem').style.display = 'block';
}
