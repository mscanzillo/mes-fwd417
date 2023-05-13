/*
 * DOTS: Level Two
 *
 */
let score = 0;
let arenaEl = document.querySelector('.js-arena');
let scoreEl = document.querySelector('.js-score');

function incrementScore() {
    score = score + 10;
    if(score < 100) {
        scoreEl.innerText = score;
    } else {
        scoreEl.innerText = 100;
        declareWinner();
    }
    /* DEBUG */
    console.log(score);
}

function declareWinner() {
    document.body.classList.add('game-over');
}

let allBalls = document.querySelectorAll('.js-ball');
  
allBalls.forEach((ball) => {
    ball.addEventListener('click', incrementScore);
});
    



