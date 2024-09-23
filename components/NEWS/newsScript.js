const imgItem = document.getElementById('imgItem');
const carouselIndicators = document.getElementById('carouselIndicators');

const API_URL = 'https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=5a3401ab7ff2433ebf3773976c206834';

async function fetchNews() {
    try {
        imgItem.innerHTML = "Loading...";
        carouselIndicators.innerHTML = ""; // Clear indicators
        const response = await fetch(API_URL);
        const data = await response.json();

        if (!data.articles || data.articles.length === 0) {
            imgItem.innerHTML = "No articles found.";
            return;
        }

        // Populate the carousel with images and indicators
        for (let i = 0; i < Math.min(3, data.articles.length); i++) {
            displayImage(data.articles[i].urlToImage, i === 0);
            addIndicator(i);
        }

    } catch (error) {
        imgItem.innerHTML = "Error fetching news: " + error.message;
    }
}

function displayImage(imageSrc, isActive) {
    const div = document.createElement('div');
    div.className = `carousel-item ${isActive ? 'active' : ''}`;
    
    const image = document.createElement('img');
    image.src = imageSrc;
    image.className = "d-block w-100";
    image.alt = "Image related to the article";
    
    div.appendChild(image);
    imgItem.appendChild(div);
}

function addIndicator(index) {
    const button = document.createElement('button');
    button.type = "button";
    button.setAttribute('data-bs-target', '#carouselExampleCaptions');
    button.setAttribute('data-bs-slide-to', index);
    button.className = index === 0 ? 'active' : '';
    button.setAttribute('aria-current', index === 0 ? 'true' : 'false');
    button.setAttribute('aria-label', `Slide ${index + 1}`);
    
    carouselIndicators.appendChild(button);
}

fetchNews();
