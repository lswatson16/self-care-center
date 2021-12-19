// query selector variables 👇
var selectedAffirmation = document.querySelector('#message-affirmation');
var selectedMantra = document.querySelector('#message-mantra');
var receiveButton = document.querySelector('.recieve-msg-button');
var messageDisplayed = document.querySelector('.message-displayed');
var meditateIcon = document.querySelector('img');

var affirmations = [
  'I forgive myself and set myself free.',
  'I believe I can be all that I want to be.',
  'I am in the process of becoming the best version of myself.'
];

var mantras = [
  'Breathing in, I send myself love. Breathing out, I send love to someone else who needs it.',
  'Don’t let yesterday take up too much of today.',
  'Every day is a second chance.'
];

// global variables 👇


// event listeners 👇
receiveButton.addEventListener('click', randomMessage);


// functions and event handlers 👇

// get a random number
function getRandomInt(array) {
    return Math.floor(Math.random() * array.length);
}
// use random number as the index number for the selected array category

function randomMessage() {
  if (selectedAffirmation.checked) {
      // console.log('you selected affirmation');
      // console.log(affirmations[0]);
      // console.log(affirmations[getRandomInt(affirmations)]);
      messageDisplayed.innerText = affirmations[getRandomInt(affirmations)];
      meditateIcon.classList.add('hidden');
  } else if (selectedMantra.checked) {
      // console.log('you selected mantra');
      // console.log(mantras[0]);
      messageDisplayed.innerText = mantras[getRandomInt(mantras)];
      meditateIcon.classList.add('hidden');
  }
}

// create an instance of the class
