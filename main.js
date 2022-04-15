const menu = document.querySelector('.menu');
let menuOpen = false;
const activeMenu = document.querySelector('.list-container');
const items = document.querySelectorAll('.list-item');
const companyContainer = document.querySelector('.companies');

const companies = [
  {
    id: 0,
    image: './Images/INDOMIE-LOGO.webp',
    name: 'Indomie',
    title: 'Buy all kinds of indomie product',
    description:
      'We offer customers sustainable, valuable products through low prices, high product quality, and outstanding customerservice.',
  },
  {
    id: 1,
    image: './Images/apple.jpg',
    name: 'Apple',
    title:
      'Buy any apple products with direct link to the company, place an order now!!',
    description:
      'We offer customers sustainable, valuable products through low prices, high product quality, and outstanding customerservice.',
  },
  {
    id: 2,
    image: './Images/oraimo.jpg',
    name: 'Oraimo',
    title: 'We offer you cheap accessories based on company`s price',
    description:
      'We offer customers sustainable, valuable products through low prices, high product quality, and outstanding customerservice.',
  },
  {
    id: 3,
    image: './Images/mama-gold.jpg',
    name: 'Mama Gold',
    title:
      'Mama Gold is the best price company and it is an inhouse production',
    description:
      'We offer customers sustainable, valuable products through low prices, high product quality, and outstanding customerservice.',
  },
];

function toggleMenu() {
  if (!menuOpen) {
    menu.classList.add('open');
    menuOpen = true;
    activeMenu.style.left = '0';
  } else {
    menu.classList.remove('open');
    menuOpen = false;
    activeMenu.style.left = '-100%';
  }
}
menu.addEventListener('click', toggleMenu);
items.forEach((item) => {
  item.addEventListener('click', toggleMenu);
});

function listOfCompanies() {
  for (let i = 0; i < companies.length; i += 1) {
    const article = document.createElement('article');
    const heading3 = document.createElement('h3');
    const paragraph = document.createElement('p');
    const heading4 = document.createElement('h4');
    const div = document.createElement('div');
    const span = document.createElement('span');
    const img = document.createElement('img');
    companyContainer.appendChild(article);
    article.classList.add('list-company');
    article.append(img, div);
    img.src = companies[i].image;
    div.append(heading3, heading4, span, paragraph);
    heading3.textContent = companies[i].name;
    heading4.textContent = companies[i].title;
    paragraph.textContent = companies[i].description;
  }
}
listOfCompanies();
const centerDiv = document.createElement('div');
const button = document.createElement('button');
const icon = document.createElement('i');
companyContainer.appendChild(centerDiv);
centerDiv.classList.add('center');
centerDiv.appendChild(button);
button.classList.add('more-or-less');
button.textContent = 'Show More';
button.appendChild(icon);
icon.classList.add('fa-solid', 'fa-chevron-down');
