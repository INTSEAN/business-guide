// client/public/scripts/header.js
const header = document.querySelector('header');

// header container
const headerContainer = document.createElement('div');
headerContainer.className = 'header-container';

// header-left div
const headerLeft = document.createElement('div');
headerLeft.className = 'header-left';

// logo image
const logo = document.createElement('img');
logo.src = './images/logo.png';
logo.alt = 'Business Guide Logo';

// title
const title = document.createElement('h1');
title.textContent = 'Guide to Starting Your Business';

// Added logo and title to header-left
headerLeft.appendChild(logo);
headerLeft.appendChild(title);

//  header-right div
const headerRight = document.createElement('div');
headerRight.className = 'header-right';

//  Home button
const homeButton = document.createElement('button');
homeButton.textContent = 'Home';
homeButton.addEventListener('click', () => {
  window.location.href = '/';
});

//  button to header-right
headerRight.appendChild(homeButton);

//  header-left and header-right to header-container
headerContainer.appendChild(headerLeft);
headerContainer.appendChild(headerRight);

//  header-container to header
header.appendChild(headerContainer);
