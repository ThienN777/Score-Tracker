const score1 = document.getElementById('score1');
const score2 = document.getElementById('score2');

function increase(player) {
    const score = document.getElementById("score" + player);
    score.textContent = Number(score.textContent) + 1;
}

function decrease(player) {
    const score = document.getElementById("score" + player);
    const tempScore = Number(score.textContent) - 1;
    if (tempScore >= 0) {
        score.textContent = tempScore;
    }
}

function reset(player) {
    const score = document.getElementById("score" + player);
    score.textContent = 0;
}

function endGame() {
    const s1 = Number(score1.textContent);
    const s2 = Number(score2.textContent);
    if (s1 > s2) {
        alert("Player 1 wins");
    }else if(s1 === s2) {
        alert("Tie game")
    }else {
        alert("Player 2 wins");
    }
    score1.textContent = 0;
    score2.textContent = 0;
}

document.getElementById('inc1').addEventListener('click', () => increase(1));
document.getElementById('inc2').addEventListener('click', () => increase(2));

document.getElementById('dec1').addEventListener('click', () => decrease(1));
document.getElementById('dec2').addEventListener('click', () => decrease(2));

document.getElementById('res1').addEventListener('click', () => reset(1));
document.getElementById('res2').addEventListener('click', () => reset(2));

document.querySelector('.endBtn').addEventListener('click', endGame); 