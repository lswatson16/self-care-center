// query selector variables 👇
var selectedAffirmation = document.querySelector('#message-affirmation');
var selectedMantra = document.querySelector('#message-mantra');
var receiveButton = document.querySelector('.recieve-msg-button');
var messageDisplayed = document.querySelector('.message-displayed');
var meditateIcon = document.querySelector('img');

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
