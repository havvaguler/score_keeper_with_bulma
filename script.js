const p1 = {
    score: 0,
    button: document.querySelector('#p1Button'),
    display: document.querySelector('#p1Display')
}

const p2 = {
    score: 0,
    button: document.querySelector('#p2Button'),
    display: document.querySelector('#p2Display')
}

const resetButton = document.querySelector('#resetButton');
const playNum = document.querySelector('#playNum');
let isGameOver = false;
let winnerScore = 5;


function updateScore(player, opponent) {
    if (!isGameOver) {
        player.score++;
        if (player.score === winnerScore) {
            isGameOver = true;
            player.display.classList.add('has-text-success');
            opponent.display.classList.add('has-text-danger');
            player.button.disabled = true;
            opponent.button.disabled = true;
        }
        player.display.innerText = player.score;
    }
}

p1.button.addEventListener('click', function () {
    updateScore(p1, p2);
})

p2.button.addEventListener('click', function () {
    updateScore(p2, p1);
})



playNum.addEventListener('change', function () {
    winnerScore = parseInt(this.value);
    reset();
})


function reset() {
    isGameOver = false;
    p1.score = 0;
    p2.score = 0;
    p1.display.innerText = 0;
    p2.display.innerText = 0;
    p1.display.classList.remove('has-text-success', 'has-text-danger');
    p2.display.classList.remove('has-text-success', 'has-text-danger');
    p1.button.disabled = false;
    p2.button.disabled = false;
}

resetButton.addEventListener('click', reset);

























