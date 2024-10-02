const imgItem = document.getElementById('imgItem');
const tailwindcard = document.getElementById('tailwindcard');
const carouselIndicators = document.getElementById('carouselIndicators');

const API_URL = 'https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=5a3401ab7ff2433ebf3773976c206834';
const API_URL_tech = 'https://newsdata.io/api/1/latest?apikey=pub_5507661984d1b35d983b103b0e36c2f70927c&category=politics&country=bd';


async function fetchNews() {
    try {

        imgItem.innerHTML = "Loading ....";
        carouselIndicators.innerHTML = ""; // Clear indicators
        const response = await fetch(API_URL);
        const data = await response.json();


        if (!data.articles || data.articles.length === 0) {
            imgItem.innerHTML = "No articles found.";
            return;
        }

        // Populate the carousel with images and indicators
        for (let i = 0; i < Math.min(data.articles.length, 5); i++) {
            displayImage(data.articles[i], i === 0);
            addIndicator(i);
        }

        for (let i = 0; i < Math.min(data.articles.length, 9); i++) {
            displayNewsCard(data.articles[i]);

        }
    } catch (error) {
        imgItem.innerHTML = "Error: " + error.message;
    }
}


function displayImage(imageSrc, isActive) {
    const div = document.createElement('div');
    const a = document.createElement('a');
    const h4 = document.createElement('h4');
    const title = document.createElement('div');

    // Set class names
    div.className = `carousel-item ${isActive ? 'active' : ''}`;

    // Create image element
    const image = document.createElement('img');
    image.src = imageSrc.urlToImage;
    image.className = "d-block w-100";
    image.alt = "Image related to the article";

    // Set up link
    a.href = imageSrc.url;
    a.appendChild(image);

    // Add in html page 

    div.appendChild(a);
    div.appendChild(title);

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




async function fetchTech() {
    try {
        // imgItem.innerHTML = "Loading...";
        const response = await fetch(API_URL_tech);
        const data = await response.json();
        console.log(data);


        if (!data.results || data.results.length === 0) {
            imgItem.innerHTML = "No articles found.";
            return;
        }

        // Populate the carousel 
        for (let i = 0; i < Math.min(data.results.length, 2); i++) {
            displayCard(data.results[i], i === 0);

        }
        for (let i = 0; i < Math.min(data.results.length, 9); i++) {
            displaytechCard(data.results[i]);

        }
        displayNewsCard

    } catch (error) {
        imgItem.innerHTML = ": " + error.message;
    }
}

function displayCard(imageSrc) {
    const a = document.createElement('a');
    const image = document.createElement('img')
    const div = document.createElement('div');
    const h5 = document.createElement('h5');
    const p = document.createElement('p');
    a.className = "flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700";
    a.href = imageSrc.source_url;
    image.className = 'object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-s-lg';
    image.src = imageSrc.image_url;
    div.className = "flex flex-col justify-between p-4 leading-normal";
    h5.className = "mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white";
    h5.textContent = imageSrc.title;
    p.className = "mb-3 font-normal text-gray-700 dark:text-gray-400";
    p.textContent = imageSrc.description;

    a.appendChild(image);
    div.appendChild(h5);
    div.appendChild(p);
    a.appendChild(div)
    tailwindcard.appendChild(a);


}

function displaytechCard(imageSrc) {
    const a =document.createElement('a');
    const div= document.createElement('div');
    a.href=imageSrc.url;
    const image = document.createElement('img')
    image.src=imageSrc.image_url;
    image.className="rounded-t-lg";
    a.appendChild(image);
    div.className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700";
    div.appendChild(a);
    tech5Card.appendChild(div)

    div.className="p-5";
    a.href=imageSrc.url;
    const h5=document.createElement('h5');
    h5.className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white";
    h5.textContent=imageSrc.title;
    a.appendChild(h5);

    div.appendChild(a);
    tech5Card.appendChild(div);
}

function displayNewsCard(imageSrc) {
    const a =document.createElement('a');
    const button = document.createElement('button');
    const div= document.createElement('div');
    a.href=imageSrc.url;
    const image = document.createElement('img')
    image.src=imageSrc.urlToImage;
    image.className="rounded-t-lg";
    a.appendChild(image);
    div.className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700";
    div.appendChild(a);
    News5Card.appendChild(div)

    div.className="p-5";
    a.href=imageSrc.url;
    const h5=document.createElement('h5');
    h5.className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white";
    h5.textContent=imageSrc.title;
    a.appendChild(h5);
    div.appendChild(a);
    button.type = "button";
    a.textContent="Read More";
    button.appendChild(a);
    div.appendChild(button);
    News5Card.appendChild(div);
}

// call Api 
fetchNews();
fetchTech();
