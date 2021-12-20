// query selector variables 👇
var selectedAffirmation = document.querySelector('#select-affirmation');
var selectedMantra = document.querySelector('#select-mantra');
var receiveButton = document.querySelector('.recieve-msg-button');
var messageDisplayed = document.querySelector('.message-displayed');
var meditateIcon = document.querySelector('img');
var favoriteButton = document.querySelector('#favorite');
var viewFavoritesButton = document.querySelector('#view-favorites-button');
var favMessageList = document.querySelector('.favorite-message-list');
var buttonBox = document.querySelector('.button-box');
var messageBox = document.querySelector('.message-box');
var question = document.querySelector('#question');
var favoriteViewPage = document.querySelector('.list-favorites-viewpage');
var mainPageView = document.querySelector('.main-page');
var returnButton = document.querySelector('#return');


var affirmations = [
  'I forgive myself and set myself free.',
  'I believe I can be all that I want to be.',
  'I am in the process of becoming the best version of myself.',
  'I have the freedom & power to create the life I desire.',
  'I choose to be kind to myself and love myself unconditionally.',
  'My possibilities are endless.',
  'I am worthy of my dreams.',
  'I am enough.',
  'I deserve to be healthy and feel good.',
  'I am full of energy and vitality and my mind is calm and peaceful.',
  'Every day I am getting healthier and stronger.',
  'I honor my body by trusting the signals that it sends me.',
  'I manifest perfect health by making smart choices.',
];

var mantras = [
  'Breathing in, I send myself love. Breathing out, I send love to someone else who needs it.',
  'Don’t let yesterday take up too much of today.',
  'Every day is a second chance.',
  'Tell the truth and love everyone.',
  'I am free from sadness.',
  'I am enough.',
  'In the beginning it is you, in the middle it is you and in the end it is you.',
  'I love myself.',
  'I am present now.',
  'Inhale the future, exhale the past.',
  'This too shall pass.',
  'Yesterday is not today.',
  'The only constant is change.',
  'Onward and upward.',
  'I am the sky, the rest is weather.',
];

// global variables 👇
var favorites = [];

// event listeners 👇
receiveButton.addEventListener('click', randomMessage);
favoriteButton.addEventListener('click', addToFavorites);
viewFavoritesButton.addEventListener('click', viewListOfFavs);
returnButton.addEventListener('click', returnToMain);
// removeButton.addEventListener('click', removeMessage);


// functions and event handlers 👇

// get a random number
// use random number as the index number for the selected array category
function getRandomInt(array) {
  return Math.floor(Math.random() * array.length);
}

function randomMessage() {
  if (selectedAffirmation.checked) {
    messageDisplayed.innerText = affirmations[getRandomInt(affirmations)];
  } else if (selectedMantra.checked) {
    messageDisplayed.innerText = mantras[getRandomInt(mantras)];
  }

  meditateIcon.classList.add('hidden');
  messageDisplayed.classList.remove('hidden');
  // favorite button should appear
  favoriteButton.classList.remove('hidden');
}

function addToFavorites() {
  // when favorite button is clicked (event listener)
  // - the message displayed should be added to a new list of favorite messages (global variable)
  console.log('add to favorites');
  console.log('this string', messageDisplayed.innerText);
  favorites.push(messageDisplayed.innerText);
  console.log(favorites);
  viewFavoritesButton.classList.remove('hidden');
}

// add "view favorites" button
function viewListOfFavs() {
  favMessageList.innerHTML = '';
  console.log('view my collection');
  // messageDisplayed.classList.add('hidden');
  // buttonBox.classList.add('hidden');
  // messageBox.classList.add('hidden');
  question.classList.add('hidden');
  // viewFavoritesButton.classList.add('hidden');
  favoriteViewPage.classList.remove('hidden');
  mainPageView.classList.add('hidden');
  viewFavoritesButton.classList.add('hidden');
  returnButton.classList.remove('hidden');

  // iteration to create a new listed item for each favorite message and display on page
  for (i = 0; i < favorites.length; i++) {
    var listedFavorite = document.createElement('p');
    var removeButton = document.createElement('button');

    // favMessageList.appendChild(listedFavorite);
    // favMessageList.appendChild(removeButton);

    // try putting in div
    var favoriteMessageBox = document.createElement('div');
    favMessageList.appendChild(favoriteMessageBox)
    favoriteMessageBox.appendChild(listedFavorite);
    favoriteMessageBox.appendChild(removeButton);

    listedFavorite.classList.add('listed-item');
    removeButton.classList.add('remove-button');
    favoriteMessageBox.classList.add('favorite-message-box');
    listedFavorite.innerText = favorites[i];
    removeButton.innerText = 'Remove';
  }
}

function returnToMain() {
  favoriteViewPage.classList.add('hidden');
  mainPageView.classList.remove('hidden');
  viewFavoritesButton.classList.remove('hidden');
  question.classList.remove('hidden');
  returnButton.classList.add('hidden');
}

// function removeMessage() {
//   console.log('removing message');
// }
