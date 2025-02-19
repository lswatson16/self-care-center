// query selector variables 👇
var selectedAffirmation = document.querySelector('#select-affirmation');
var selectedMantra = document.querySelector('#select-mantra');
var receiveButton = document.querySelector('.recieve-msg-button');
var messageDisplayed = document.querySelector('.message-displayed');
var meditateIcon = document.querySelector('img');
var favoriteButton = document.querySelector('#favorite-button');
var viewFavoritesButton = document.querySelector('#view-favorites-button');
var favMessageList = document.querySelector('.favorites-list');
var buttonBox = document.querySelector('.button-box');
var messageBox = document.querySelector('.message-box');
var question = document.querySelector('#question');
var favoriteViewPage = document.querySelector('.favorites-viewpage');
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
// Error: "removeButton is not defined" because the element does not exist when the page loads
// Solution: event delegation & bubbling - https://stackoverflow.com/questions/34896106/attach-event-to-dynamic-elements-in-javascript
favoriteViewPage.addEventListener('click', function(e) {
  if (e.target && e.target.matches('.remove-button')) {
    console.log('remove button was clicked, do something,');
    // console.log(e);
    // the element that was clicked, console log e.srcElement
    console.log(e.srcElement);
    console.log(e.srcElement.previousElementSibling);
    console.log(e.srcElement.previousElementSibling.innerText);

    var messageToBeRemoved = e.srcElement.previousElementSibling.innerText;
    var indexOfMessageToBeRemoved = favorites.indexOf(messageToBeRemoved);
    console.log(indexOfMessageToBeRemoved);
    console.log('favorites', favorites);
    favorites.splice(indexOfMessageToBeRemoved, 1);
    console.log('favorites', favorites);

    // display the changes on the DOM
    viewListOfFavs();
  }
});


// functions and event handlers 👇

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
  question.classList.add('hidden');
  favoriteViewPage.classList.remove('hidden');
  mainPageView.classList.add('hidden');
  viewFavoritesButton.classList.add('hidden');
  returnButton.classList.remove('hidden');

  // if favorites list is not empty
  if (favorites.length > 0) {
    // iteration to create a new listed item for each favorite message and display on page
    for (i = 0; i < favorites.length; i++) {
      var listedFavorite = document.createElement('p');
      var removeButton = document.createElement('button');
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
  } else {
    console.log('no favorites');
    favMessageList.innerText = 'You do not have any favorites saved.';
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
