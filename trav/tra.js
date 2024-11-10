
function scrolltoservices() {
    document.getElementById('page2').scrollIntoView({ behavior: 'smooth' });
}


function scrolltopackages() {
    document.getElementById('page3').scrollIntoView({ behavior: 'smooth' });
}


function scrolltoreview() {
    document.getElementById('page4').scrollIntoView({ behavior: 'smooth' });
}


function scrollToContact() {
    document.getElementById('contact').scrollIntoView({ behavior: 'smooth' });
}

function showModal() {
    document.getElementById('bookingModal').style.display = 'block';
    document.body.classList.add('login-active'); 
}


function hideModal() {
    document.getElementById('bookingModal').style.display = 'none';
    document.body.classList.remove('login-active'); 
}


document.getElementById('loginform').addEventListener('click', function() {
    const loginForm = document.getElementById('login-form');
    if (loginForm.style.display === 'none' || loginForm.style.display === '') {
        loginForm.style.display = 'block';
        document.body.classList.add('login-active');
    } else {
        loginForm.style.display = 'none';
        document.body.classList.remove('login-active');
    }
});
function toggleGrievanceForm() {
    const grievanceFormContainer = document.getElementById('grievanceFormContainer');
    if (grievanceFormContainer.style.display === 'none' || grievanceFormContainer.style.display === '') {
        grievanceFormContainer.style.display = 'block';
    } else {
        grievanceFormContainer.style.display = 'none';
    }
}

function submitGrievanceForm() {
    alert('Your grievance has been successfully submitted!');
    return true;
}



function showPrice() {
    document.getElementById('price-content').style.display = 'block';
}

function showPrice1() {
    document.getElementById('price-content1').style.display = 'block';
}

function showPrice2() {
    document.getElementById('price-content2').style.display = 'block';
}

function showPrice3() {
    document.getElementById('price-content3').style.display = 'block';
}

function showPrice4() {
    document.getElementById('price-content4').style.display = 'block';
}


function openVideo() {
    window.alert("This feature is not implemented yet.");
}
function handleBookingSubmit() {
    // Show the success message
    alert('Your ticket has been booked successfully!');
    // Allow the form to be submitted
    return true;
}



const places = {
    "mumb": {
        name: "Mumbai",
        details: "Mumbai is the financial capital of India and the largest city in the country. It is known for its vibrant culture, historical landmarks, and bustling markets. Nearest Airport: Chhatrapati Shivaji Maharaj International Airport. Important Places: Gateway of India, Marine Drive, Juhu Beach."
    },
    "delhi": {
        name: "Delhi",
        details: "Delhi is the capital city of India, known for its rich history, diverse culture, and many historical monuments like the Red Fort and Qutub Minar. Nearest Airport: Indira Gandhi International Airport. Important Places: India Gate, Humayun's Tomb, Lotus Temple."
    },
    "bang": {
        name: "Bangalore",
        details: "Bangalore, also known as Bengaluru, is the tech capital of India. It's famous for its parks, nightlife, and as the hub of India's IT industry. Nearest Airport: Kempegowda International Airport. Important Places: Lalbagh Botanical Garden, Cubbon Park, Bangalore Palace."
    },
    "lada": {
        name: "Ladakh",
        details: "Ladakh, located in the northernmost region of India, is a high-altitude desert renowned for its breathtaking landscapes, serene monasteries, and unique cultural heritage. Nearest Airport: Kushok Bakula Rimpochee Airport (Leh). Important Places: Pangong Lake, Nubra Valley, Thiksey Monastery."
    },
    "man": {
        name: "Manali",
        details: "With spectacular valleys, breathtaking views, snowcapped mountains, and lush forests of oak, deodar, and pine, Manali is a magical hill station at the northern end of Kullu valley in Himachal Pradesh. Nearest Airport: Kullu-Manali Airport. Important Places: Solang Valley, Rohtang Pass, Hadimba Temple."
    },
    "gokar": {
        name: "Gokarna",
        details: "Gokarna is a small temple town on the western coast of India in Karnataka, known for its beautiful beaches and serene environment. Nearest Airport: Goa International Airport. Important Places: Om Beach, Kudle Beach, Mahabaleshwar Temple."
    },
    "agra": {
        name: "Agra",
        details: "Agra is home to the iconic Taj Mahal, one of the Seven Wonders of the World. It's a city rich in Mughal history and architecture. Nearest Airport: Pandit Deen Dayal Upadhyay Airport. Important Places: Taj Mahal, Agra Fort, Fatehpur Sikri."
    },
    "gulma": {
        name: "Gulmarg",
        details: "Gulmarg is a popular hill station and skiing destination in Jammu and Kashmir, known for its scenic beauty and adventure sports. Nearest Airport: Sheikh ul-Alam International Airport (Srinagar). Important Places: Gulmarg Gondola, Apharwat Peak, Khilanmarg."
    },
    "darje": {
        name: "Darjeeling",
        details: "Darjeeling is a town in West Bengal, famous for its tea industry and views of the Kangchenjunga range. Nearest Airport: Bagdogra Airport. Important Places: Tiger Hill, Darjeeling Himalayan Railway, Batasia Loop."
    },
    "goa": {
        name: "Goa",
        details: "Goa is known for its beautiful beaches, vibrant nightlife, and Portuguese heritage. It's a major tourist destination in India. Nearest Airport: Goa International Airport. Important Places: Baga Beach, Fort Aguada, Basilica of Bom Jesus."
    },
    "jaip": {
        name: "Jaipur",
        details: "Jaipur, also known as the Pink City, is famous for its rich history, palaces, and vibrant culture. Nearest Airport: Jaipur International Airport. Important Places: Amer Fort, Hawa Mahal, City Palace."
    },
    "varana": {
        name: "Varanasi",
        details: "Varanasi, one of the oldest cities in the world, is a spiritual hub in India, known for its ghats along the Ganges River. Nearest Airport: Lal Bahadur Shastri International Airport. Important Places: Kashi Vishwanath Temple, Dashashwamedh Ghat, Sarnath."
    },
    "laksha": {
        name: "Lakshadweep",
        details: "Lakshadweep is a group of islands off the coast of Kerala, known for its exotic beaches and coral reefs. Nearest Airport: Agatti Airport. Important Places: Minicoy Island, Bangaram Island, Kavaratti Island."
    },
    "amrit": {
        name: "Amritsar",
        details: "Amritsar is home to the Golden Temple, the most sacred shrine in Sikhism. It's also known for its rich Punjabi culture. Nearest Airport: Sri Guru Ram Dass Jee International Airport. Important Places: Golden Temple, Jallianwala Bagh, Wagah Border."
    },
    "oot": {
        name: "Ooty",
        details: "Ooty, also known as Udhagamandalam, is a hill station in Tamil Nadu, famous for its tea gardens and scenic beauty. Nearest Airport: Coimbatore International Airport. Important Places: Ooty Lake, Botanical Gardens, Doddabetta Peak."
    },
    "ayodh": {
        name: "Ayodhya, Ram Mandir",
        details: "Ayodhya is a city in Uttar Pradesh, believed to be the birthplace of Lord Rama. The Ram Mandir is a major attraction. Nearest Airport: Chaudhary Charan Singh International Airport (Lucknow). Important Places: Ram Mandir, Hanuman Garhi, Saryu River."
    },
    "shim": {
        name: "Shimla",
        details: "Shimla, the capital of Himachal Pradesh, is known for its colonial architecture and scenic mountain views. Nearest Airport: Shimla Airport. Important Places: The Ridge, Mall Road, Jakhoo Temple."
    },
    "kolk": {
        name: "Kolkata",
        details: "Kolkata, the cultural capital of India, is known for its art, literature, and history. Nearest Airport: Netaji Subhas Chandra Bose International Airport. Important Places: Victoria Memorial, Howrah Bridge, Dakshineswar Kali Temple."
    },
    "lonv": {
        name: "Lonavala",
        details: "Lonavala is a hill station near Mumbai, known for its lush green valleys and waterfalls. Nearest Airport: Pune International Airport. Important Places: Bhushi Dam, Tiger Point, Karla Caves."
    },
    "pondi": {
        name: "Pondicherry",
        details: "Pondicherry, also known as Puducherry, is a Union Territory in India, known for its French colonial architecture and beaches. Nearest Airport: Puducherry Airport. Important Places: Auroville, Promenade Beach, Aurobindo Ashram."
    },
    "dal": {
        name: "Dalhousie",
        details: "Dalhousie is a hill station in Himachal Pradesh, known for its colonial-era buildings and scenic beauty. Nearest Airport: Pathankot Airport. Important Places: Khajjiar, Panchpula, Satdhara Falls."
    },
    "hamp": {
        name: "Hampi",
        details: "Hampi is a UNESCO World Heritage Site in Karnataka, known for its ancient temples and ruins. Nearest Airport: Hubli Airport. Important Places: Virupaksha Temple, Vittala Temple, Hampi Bazaar."
    },
    "jodh": {
        name: "Jodhpur",
        details: "Jodhpur, also known as the Blue City, is famous for its palaces, forts, and temples. Nearest Airport: Jodhpur Airport. Important Places: Mehrangarh Fort, Umaid Bhawan Palace, Jaswant Thada."
    },
    "jaisl": {
        name: "Jaisalmer",
        details: "Jaisalmer, also known as the Golden City, is famous for its yellow sandstone architecture and desert safaris. Nearest Airport: Jaisalmer Airport. Important Places: Jaisalmer Fort, Sam Sand Dunes, Patwon Ki Haveli."
    },
    "ujja": {
        name: "Ujjain",
        details: "Ujjain is an ancient city in Madhya Pradesh, known for its Mahakaleshwar Temple and as one of the sites of the Kumbh Mela. Nearest Airport: Devi Ahilya Bai Holkar Airport (Indore). Important Places: Mahakaleshwar Temple, Ram Ghat, Kal Bhairav Temple."
    },
    "hyder": {
        name: "Hyderabad",
        details: "Hyderabad, known as the City of Pearls, is famous for its historical sites, including the Charminar and Golconda Fort. Nearest Airport: Rajiv Gandhi International Airport. Important Places: Charminar, Golconda Fort, Hussain Sagar Lake."
    },
    "kaneri": {
        name: "Kanheri Caves",
        details: "The Kanheri Caves are located in the Sanjay Gandhi National Park in Mumbai and are known for their ancient Buddhist sculptures and carvings. Nearest Airport: Chhatrapati Shivaji Maharaj International Airport. Important Places: Cave No. 3 (Great Chaitya), Vihar Lake."
    },
    "ellora": {
        name: "Ellora Caves",
        details: "Ellora Caves in Maharashtra are a UNESCO World Heritage Site, known for their rock-cut temples and monuments. Nearest Airport: Aurangabad Airport. Important Places: Kailasa Temple, Cave 16, Cave 10 (Vishvakarma Cave)."
    },
    "hari": {
        name: "Haridwar",
        details: "Haridwar is a sacred city in Uttarakhand, known for its ghats and the Ganga Aarti at Har Ki Pauri. Nearest Airport: Jolly Grant Airport (Dehradun). Important Places: Har Ki Pauri, Mansa Devi Temple, Chandi Devi Temple."
    },
    "siddhi": {
        name: "Siddhivinayak Ganapathi Temple",
        details: "Siddhivinayak Temple in Mumbai is one of the most famous temples dedicated to Lord Ganesha. Nearest Airport: Chhatrapati Shivaji Maharaj International Airport. Important Places: Prabhadevi Beach, Shivaji Park."
    },
    "koch": {
        name: "Kochi",
        details: "Kochi, also known as Cochin, is a major port city in Kerala, known for its colonial history and backwaters. Nearest Airport: Cochin International Airport. Important Places: Fort Kochi, Mattancherry Palace, Chinese Fishing Nets."
    },
    "tiru": {
        name: "Tirupati",
        details: "Tirupati is a major pilgrimage center in Andhra Pradesh, famous for the Tirumala Venkateswara Temple. Nearest Airport: Tirupati Airport. Important Places: Tirumala Temple, Kapila Theertham, Chandragiri Fort."
    },
    "chenn": {
        name: "Chennai",
        details: "Chennai, the capital of Tamil Nadu, is known for its beaches, temples, and cultural heritage. Nearest Airport: Chennai International Airport. Important Places: Marina Beach, Kapaleeshwarar Temple, Fort St. George."
    },
    "alib": {
        name: "Alibaug",
        details: "Alibaug is a coastal town in Maharashtra, known for its beaches and forts. Nearest Airport: Chhatrapati Shivaji Maharaj International Airport (Mumbai). Important Places: Alibaug Beach, Kolaba Fort, Nagaon Beach."
    },
    "ahmed": {
        name: "Ahmedabad",
        details: "Ahmedabad is a major city in Gujarat, known for its textile industry and historic sites. Nearest Airport: Sardar Vallabhbhai Patel International Airport. Important Places: Sabarmati Ashram, Kankaria Lake, Adalaj Stepwell."
    },
    "myso": {
        name: "Mysore",
        details: "Mysore is a city in Karnataka, known for its royal heritage and palaces. Nearest Airport: Mysore Airport. Important Places: Mysore Palace, Chamundi Hill, Brindavan Gardens."
    },
    "shird": {
        name: "Shirdi Sai Baba",
        details: "Shirdi is a town in Maharashtra, famous as the home of the revered saint Sai Baba. Nearest Airport: Shirdi International Airport. Important Places: Shirdi Sai Baba Temple, Dwarkamai, Chavadi."
    },
    "mahabales": {
        name: "Mahabaleshwar",
        details: "Mahabaleshwar is a hill station in Maharashtra, known for its strawberries, scenic views, and waterfalls. Nearest Airport: Pune International Airport. Important Places: Venna Lake, Pratapgad Fort, Mapro Garden."
    },
    "kazirang": {
        name: "Kaziranga National Park",
        details: "Kaziranga National Park in Assam is a UNESCO World Heritage Site, known for its population of the Indian one-horned rhinoceros. Nearest Airport: Jorhat Airport. Important Places: Central Range (Kohora), Western Range (Bagori)."
    },
    "chand": {
        name: "Chandigarh",
        details: "Chandigarh is a Union Territory and the capital of both Punjab and Haryana, known for its urban design and architecture. Nearest Airport: Chandigarh International Airport. Important Places: Rock Garden, Sukhna Lake, Rose Garden."
    }
};
function searchPlace() {
    const input = document.getElementById('searchInput').value.toLowerCase();
    const resultsContainer = document.getElementById('searchResults');
    
    
    
    resultsContainer.innerHTML = "";

    
    if (places[input]) {
        const place = places[input];
        console.log(place.image); 
        const result = `<div class="result-item">
                            <b><h3>${place.name}</h3></b>
                            <p>${place.details}</p>
                           
                        </div>`;
        resultsContainer.innerHTML = result;
    } else if (input) {
        resultsContainer.innerHTML = "<p>No results found.</p>";
    }
    
    
}
