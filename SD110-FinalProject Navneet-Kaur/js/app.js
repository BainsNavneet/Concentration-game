// Create a list that holds all of your cards


const deck = document.querySelector('.deck')
let card = document.getElementsByClassName('card')
const move = document.querySelector('.moves')
let match = document.getElementsByClassName('match')
const restart = document.querySelector('.restart')

let win = false;
let openCards = []; // empty array
let count = 0; // counter starting point

// Event Listener 
deck.addEventListener('click', function (e) {
  if (e.target.classList.contains('card') && !e.target.classList.contains("show", "open") && openCards.length < 2) {
    e.target.classList.toggle("open") && e.target.classList.toggle("show");
    e.target.classList.add('show', 'open');
    openCards.push(e.target);
    count = 0;
    if (openCards.length === 2) {
      setTimeout(function () {
        console.log(openCards)
        /* - loop through each card and create its HTML
         *   - add each card's HTML to the page
         */
        if (openCards[0].innerHTML === openCards[1].innerHTML) {
          openCards[0].classList.add('match');
          openCards[1].classList.add('match');
          win = true;
          move.textContent++;
          openCards = [];
        } else {
          openCards[0].classList.remove('open', 'show');
          openCards[1].classList.remove('open', 'show');
          move.textContent++;
          openCards = [];
        }
        if (win) {
          checkWin();
        }
      }, 200);
    }
  }
});
// checking for winner 
function checkWin() {
  for (let matches of match) {
    console.log('matches')
    if (matches.classList.contains("match")) {
      count++;
      if (count === 16) {
        console.log("match");
        swal({
          title: 'CONGRATS!',
          text: 'HURRAY YOU WON',
        })
      }
    }
    win = false;
  };
}
//restart even listener
restart.addEventListener("click", function (e) {
  console.log(e.target);
  for (let x of card) {
    x.classList.remove('open', 'show', 'match')
    count = 0;
    win = false;
    openCards = [];
  }
});
let shuffleCard = shuffle(card)
for (let i of card) {
  deck.removeChild(i);
  deck.appendChild(i);
}
console.log(card);
console.log(shuffleCard);


// shuffle 
function shuffle(array) {
  var currentIndex = array.length,
    temporaryValue, randomIndex;

  while (currentIndex !== 0) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }

  return array;
}



/*
 * set up the event listener for a card. If a card is clicked:
 *  - display the card's symbol (put this functionality in another function that you call from this one)
 *  - add the card to a *list* of "open" cards (put this functionality in another function that you call from this one)
 *  - if the list already has another card, check to see if the two cards match
 *    + if the cards do match, lock the cards in the open position (put this functionality in another function that you call from this one)
 *    + if the cards do not match, remove the cards from the list and hide the card's symbol (put this functionality in another function that you call from this one)
 *    + increment the move counter and display it on the page (put this functionality in another function that you call from this one)
 *    + if all cards have matched, display a message with the final score (put this functionality in another function that you call from this one)
 */