let firstCard
let secondCard
let cards = []
let sum
let hasBlackJack = false
let isAlive = false
let message = ""

let messageEl = document.querySelector("#message-el")
let sumEl = document.querySelector("#sum-el")
let cardsEl = document.querySelector("#cards-el")
let firstBtn = document.querySelector("#first-btn")

let player = {
    name: "Aykut",
    chips: 145
}

let playerEl = document.querySelector("#player-el")
playerEl.textContent = player.name + ": $" + player.chips


function startGame(){
    isAlive = true
    hasBlackJack = false
    messageEl.textContent = "Want to play a round?"
    firstBtn.textContent = "START GAME"
    firstCard = getRandomCard()
    secondCard = getRandomCard()
    cards = [firstCard, secondCard]
    sum = cards[0] + cards[1]
    isAlive = true
    checkGame()
}

function checkGame(){
    cardsEl.textContent = "Cards: "
    for(let i = 0; i < cards.length; i++){
        cardsEl.textContent += ( " " + cards[i])
    }

    sumEl.textContent = "Sum: " + sum
    if(sum <= 20){
        message = "Do you want to draw another card? "
    }
    else if(sum === 21){
        message = "BLACKJACK!"
        hasBlackJack = true
        firstBtn.textContent = "RESTART GAME"
    }
    else{
        message = "You're out of the game!"
        isAlive = false
        firstBtn.textContent = "RESTART GAME"
    }
    messageEl.innerText = message
}

function newCard(){
    firstBtn.textContent = "RESTART GAME"
    if(isAlive && !hasBlackJack){
        let card = getRandomCard()
        sum += card
        cards.push(card)
        checkGame()
    }
}

function getRandomCard(){
    let randomCard = Math.floor((Math.random() * 13) + 1)
    if (randomCard === 1){
        return 11
    }
    else if(randomCard > 10){
        return 10
    }
    else
    return randomCard
}