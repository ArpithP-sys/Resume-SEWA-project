// Manage wardrobe items
let wardrobe = [];

function addWardrobeItem() {
    const wardrobeItemInput = document.getElementById('wardrobeItem');
    const item = wardrobeItemInput.value.trim();
    
    if (item === '') {
        alert('Please enter an item.');
        return;
    }

    if (wardrobe.includes(item.toLowerCase())) {
        document.getElementById('duplicateWarning').innerText = 'This item is already in your wardrobe!';
    } else {
        wardrobe.push(item.toLowerCase());
        document.getElementById('duplicateWarning').innerText = '';
        updateWardrobeGrid(item);
    }

    wardrobeItemInput.value = ''; // Clear the input field
}

function updateWardrobeGrid(item) {
    const wardrobeGrid = document.getElementById('wardrobeGrid');
    const itemDiv = document.createElement('div');
    itemDiv.classList.add('wardrobe-item');
    itemDiv.innerText = item;

    wardrobeGrid.appendChild(itemDiv);
}

// Personalized suggestions (Placeholder functionality)
function getPersonalizedSuggestions() {
    const suggestions = ['Wear a blue shirt', 'Try pairing with jeans', 'Use sneakers with that jacket!'];
    const output = document.getElementById('suggestionsOutput');
    
    output.innerHTML = '<ul>' + suggestions.map(s => `<li>${s}</li>`).join('') + '</ul>';
}

// Weather-based outfit suggestion
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

// Sustainability score (Placeholder functionality)
function checkSustainabilityScore() {
    const sustainability = {
        'cotton': 80,
        'wool': 70,
        'polyester': 30
    };
    
    const items = ['cotton shirt', 'wool sweater', 'polyester jacket'];
    let score = '';

    items.forEach(item => {
        const material = item.split(' ')[0];
        score += `<p>${item}: ${sustainability[material] || 50}/100</p>`;
    });

    document.getElementById('sustainabilityOutput').innerHTML = score;
}

// Inventory tracker
let inventory = [];

document.getElementById('add-item-btn').addEventListener('click', function() {
    const itemName = document.getElementById('item-name').value;
    const quantity = document.getElementById('quantity').value;
    const category = document.getElementById('category').value;

    if (itemName && quantity && category) {
        inventory.push({ itemName, quantity, category });
        updateInventoryTable();
    } else {
        alert('Please fill out all fields.');
    }
});

function updateInventoryTable() {
    const inventoryList = document.getElementById('inventory-list');
    inventoryList.innerHTML = ''; // Clear table

    inventory.forEach(item => {
        const row = `
            <tr>
                <td>${item.itemName}</td>
                <td>${item.quantity}</td>
                <td>${item.category}</td>
            </tr>
        `;
        inventoryList.innerHTML += row;
    });
}
// scripts/inventory.js

document.addEventListener('DOMContentLoaded', function () {
    const addItemBtn = document.getElementById('add-item-btn');
    const inventoryList = document.getElementById('inventory-list');

    addItemBtn.addEventListener('click', function () {
        const itemName = document.getElementById('item-name').value;
        const quantity = document.getElementById('quantity').value;
        const category = document.getElementById('category').value;

        if (!itemName || !quantity || !category) {
            alert('Please fill in all fields.');
            return;
        }

        const itemHTML = `
            <tr>
                <td>${itemName}</td>
                <td>${quantity}</td>
                <td>${category}</td>
            </tr>
        `;

        inventoryList.insertAdjacentHTML('beforeend', itemHTML);
    });
});



// Generate Random Sustainability Scores
document.addEventListener('DOMContentLoaded', function() {
    const items = document.querySelectorAll('#sustainabilityList .score');
    items.forEach(item => {
        const score = Math.floor(Math.random() * 40) + 60; // Random score between 60 and 100
        item.textContent = `${score}/100`;
    });
});

// scripts/suggestions.js

document.addEventListener('DOMContentLoaded', function () {
    const suggestionList = [
        { type: 'Casual Look', description: 'Perfect for a casual day out.', img: 'path_to_image1' },
        { type: 'Formal Attire', description: 'Stylish formal wear for office or meetings.', img: 'path_to_image2' },
        { type: 'Party Outfit', description: 'For a night out or special occasions.', img: 'path_to_image3' }
    ];

    const suggestionsContainer = document.querySelector('.row');

    suggestionList.forEach(suggestion => {
        const suggestionHTML = `
            <div class="col-md-4 mb-3">
                <div class="card">
                    <img src="${suggestion.img}" class="card-img-top" alt="${suggestion.type}">
                    <div class="card-body">
                        <h5 class="card-title">${suggestion.type}</h5>
                        <p class="card-text">${suggestion.description}</p>
                    </div>
                </div>
            </div>
        `;
        suggestionsContainer.insertAdjacentHTML('beforeend', suggestionHTML);
    });
});
function addWardrobeItem() {
    document.getElementById('additem').style.display = 'block';
    document.body.classList.add('login-active'); 
}
function closeform() {
    document.getElementById('additem').style.display = 'none';
    document.body.classList.remove('login-active'); 
}
function submititem() {
    // Show the success message
    alert('item has been added');
    // Allow the form to be submitted
    return true;
}
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
            suggestion = 'A bit chilly! Layer up with a jacket or a sweater.';
        } else {
            suggestion = 'It\'s cold! Wear heavy jackets and warm clothing.';
        }

        document.getElementById('weatherOutput').innerHTML = `
            <p>Current Temperature: ${tempCelsius}°C</p>
            <p>Suggestion: ${suggestion}</p>
        `;
    });
});
// scripts/inventory.js

document.addEventListener('DOMContentLoaded', function () {
    const addItemBtn = document.getElementById('add-item-btn');
    const inventoryList = document.getElementById('inventory-list');

    addItemBtn.addEventListener('click', function () {
        const itemName = document.getElementById('item-name').value;
        const quantity = document.getElementById('quantity').value;
        const category = document.getElementById('category').value;

        if (!itemName || !quantity || !category) {
            alert('Please fill in all fields.');
            return;
        }

        const itemHTML = `
            <tr>
                <td>${itemName}</td>
                <td>${quantity}</td>
                <td>${category}</td>
            </tr>
        `;

        inventoryList.insertAdjacentHTML('beforeend', itemHTML);
    });
});
function addWardrobeItem() {
    document.getElementById('additem').style.display = 'block';
    document.body.classList.add('login-active'); 
}
function closeform() {
    document.getElementById('additem').style.display = 'none';
    document.body.classList.remove('login-active'); 
}
function submititem() {
    // Show the success message
    alert('item has been added');
    // Allow the form to be submitted
    return true;
}
// Generate Random Sustainability Scores
document.addEventListener('DOMContentLoaded', function() {
    const items = document.querySelectorAll('#sustainabilityList .score');
    items.forEach(item => {
        const score = Math.floor(Math.random() * 40) + 60; // Random score between 60 and 100
        item.textContent = '${score}/100';
    });
// scripts/suggestions.js

document.addEventListener('DOMContentLoaded', function () {
    const suggestionList = [
        { type: 'Casual Look', description: 'Perfect for a casual day out.', img: 'path_to_image1' },
        { type: 'Formal Attire', description: 'Stylish formal wear for office or meetings.', img: 'path_to_image2' },
        { type: 'Party Outfit', description: 'For a night out or special occasions.', img: 'path_to_image3' }
    ];

    const suggestionsContainer = document.querySelector('.row');

    suggestionList.forEach(suggestion => {
        const suggestionHTML = `
            <div class="col-md-4 mb-3">
                <div class="card">
                    <img src="${suggestion.img}" class="card-img-top" alt="${suggestion.type}">
                    <div class="card-body">
                        <h5 class="card-title">${suggestion.type}</h5>
                        <p class="card-text">${suggestion.description}</p>
                    </div>
                </div>
            </div>
        `;
        suggestionsContainer.insertAdjacentHTML('beforeend', suggestionHTML);
    });
});
});