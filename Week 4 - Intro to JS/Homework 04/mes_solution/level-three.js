/*
 * DOTS: Level Three
 *
 */
let score = 0;
let arenaEl = document.querySelector('.js-arena');
let scoreEl = document.querySelector('.js-score');

function incrementScore() {
    score = score + parseInt(this.dataset.increment);

    if(score < 100) {
        scoreEl.innerText = score;
    } else {
        scoreEl.innerText = score;
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