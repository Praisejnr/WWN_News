const newsBody = document.getElementById('news');

const apiKey = 'c30d57324e624d4ab3e880f9595771f9';
const apiUrl = 'https://newsapi.org/v2/top-headlines?country=us&apiKey=' + apiKey;

fetch(apiUrl)
.then(response => response.json())
.then(data => {
  const articles = data.articles;
  articles.forEach(article => {
    const articleElement = document.createElement('article');
    articleElement.innerHTML = `
    <img src="${article.urlToImage}">
    <h3>${article.title}</h3>
    <p>${article.description}</p>
    <a href="${article.url}">Read More</a>`;
    
    newsBody.appendChild(articleElement);
  }) .catch(error => {
    console.error('Error fetching news:', error);
  })
});


function toggleBtn() {
const lists = document.getElementById('lists');
const btn = document.querySelector('.hamburger');
const search = document.getElementById('search');
const mode = document.querySelector('.modes');

btn.classList.toggle('active');
lists.classList.toggle('active');
search.classList.toggle('active');
mode.classList.toggle('active');
}

let isDarkMode = false;

function darkMode() {
  const element = document.body;
  const switcher = document.getElementById('switcher');
  const texter = document.getElementById('texter');
  const navBar = document.getElementById('lists');
  
  
  isDarkMode = !isDarkMode;
  
  element.classList.toggle('dark-mode');
  
  if (!isDarkMode) {
    texter.textContent = 'Dark Mode';
    body.classList.add('dark-mode');
  } else {
    texter.textContent = 'Light Mode';
    body.classList.remove('dark-mode');
    
    
    navBar.classList.remove('active');
  }
}