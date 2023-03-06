
const messages = ["You’re braver than you believe, and stronger than you seem, and smarter than you think.", "The only time you fail is when you fall down and stay down.", "Positive anything is better than negative nothing.", "Positive thinking will let you do everything better than negative thinking will.", "The more you praise and celebrate your life, the more there is in life to celebrate.", "You’re off to great places, today is your day. Your mountain is waiting, so get on your way.", "Virtually nothing is impossible in this world if you just put your mind to it and maintain a positive attitude.", "You are never too old to set another goal or dream a new dream.", "Every day may not be good… but there’s something good in every day.", "The difference between ordinary and extraordinary is that little extra."];


function getEightballMessage() {
  let messagesSize = messages.length;
  let randomNumber = Math.floor(Math.random() * messagesSize);
  return messages[randomNumber];
}

function changeMessage() {

  let eightEl = document.getElementById('eight');
  eightEl.textContent = '';


  let answerEl = document.getElementById('answer');


  answerEl.textContent = getEightballMessage();
}

let buttonEl = document.getElementById('button');
buttonEl.addEventListener('click', changeMessage);
