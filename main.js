// query selectors
var selectedAffirmation = document.querySelector('#message-affirmation');
var selectedMantra = document.querySelector('#message-mantra');
var receiveButton = document.querySelector('.recieve-msg-button');

var affirmations = [
  'I forgive myself and set myself free.',
  'I believe I can be all that I want to be.',
  'I am in the process of becoming the best version of myself.'
]

var mantras = [
  'Breathing in, I send myself love. Breathing out, I send love to someone else who needs it.',
  'Don’t let yesterday take up too much of today.',
  'Every day is a second chance.'
]

// event listeners
receiveButton.addEventListener('click', showMessage);

function showMessage() {
  if (selectedAffirmation.checked) {
      console.log('you selected affirmation');
    } else if (selectedMantra.checked) {
        console.log('you selected mantra');
      }
}






// create an instance of the class
// var quote = new Motivation({motivationInfo.category: 'affirmation', motivationInfo.message: 'I am powerful!'});

// get a random number
// function getRandomInt(max) {
//   return Math.floor(Math.random() * max);

// use random number as the index number for the selected array category
