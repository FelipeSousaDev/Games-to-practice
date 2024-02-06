let player = {
    name: 'Felipe',
    chips: 150
};
let sum = 0;
let cards = [];
let message = "";
let isAlive = false;
let hasBlackJack = false;
let sumEl = document.getElementById("sum-el");
let cardsEl = document.getElementById("cards-el");
let messageEl = document.getElementById("message-el");
let playerEl = document.getElementById('player-el')
    .textContent = `${player.name}: $${player.chips}`;


function getRandomCard () {
    let randomNumber = Math.round((Math.random() * 12) + 1);
        if (randomNumber > 10) {
            return 10;
        } else if (randomNumber === 1) { 
            return 11;
        } else {
            return randomNumber;
        }
};

function startGame() { 
    isAlive = true;
    let firstCard = getRandomCard();
    let secondCard = getRandomCard();
    cards = [firstCard, secondCard];
    sum = firstCard + secondCard;

    renderGame();
};


function renderGame() {
    cardsEl.textContent = "Cards: " + cards;
    sumEl.textContent = "Sum: " + sum
    if (sum <= 20) {
        message = "Do you want to draw a new card?"
    } else if (sum === 21) {
        message = "You've got Blackjack!"
        hasBlackJack = true;
    } else {
        message = "You're out of the game!"
        isAlive = false;
    }
    messageEl.textContent = message
  
};


function newCard() {
    if (isAlive && !hasBlackJack) {
        let card = getRandomCard();
        cards.push(card);
        sum += card;
        renderGame();
     }
    
};