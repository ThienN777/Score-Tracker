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

function edit(player) {
    const playerName = document.getElementById('p' + player + 'Name');
    const input = document.createElement('input');
    input.type = "text";
    input.classList.add("editInput")
    input.value = playerName.textContent;
    input.maxLength = 20;
    if (player === 2) {
        input.style.textAlign = "right";
    }

    let finished = false;

    playerName.replaceWith(input);
    input.focus();
    document.getElementById('editBtn' + player).style.display = 'none';

    function finishEdit() {
        if (finished) {
            return;
        }
        finished = true;

        const name = input.value.trim();
        if (name === "") {
            playerName.textContent = "Player " + player;
        }else {
            playerName.textContent = name;
        }
        input.replaceWith(playerName);
        document.getElementById('editBtn' + player).style.display = 'flex';
    }

    input.addEventListener("keydown", (e) => {
        if (e.key === "Enter") {
            finishEdit();
        }
    })

    input.addEventListener("blur", finishEdit);
}


function endGame() {
    const s1 = Number(score1.textContent);
    const s2 = Number(score2.textContent);
    const player1 = document.getElementById("p1Name");
    const player2 = document.getElementById("p2Name");
    if (s1 > s2) {
        alert(player1.textContent + " wins");
    }else if(s1 === s2) {
        alert("Tie game")
    }else {
        alert(player2.textContent + " wins");
    }
    score1.textContent = 0;
    score2.textContent = 0;
}

function openSettings() {
    const settings = document.getElementById('settings');
    settings.classList.toggle("hidden");
}

document.getElementById('inc1').addEventListener('click', () => increase(1));
document.getElementById('inc2').addEventListener('click', () => increase(2));

document.getElementById('dec1').addEventListener('click', () => decrease(1));
document.getElementById('dec2').addEventListener('click', () => decrease(2));

document.getElementById('res1').addEventListener('click', () => reset(1));
document.getElementById('res2').addEventListener('click', () => reset(2));

document.getElementById('editBtn1').addEventListener('click', () => edit(1));
document.getElementById('editBtn2').addEventListener('click', () => edit(2));

document.querySelector('.endBtn').addEventListener('click', endGame); 

document.getElementById('settingsBtn').addEventListener('click', openSettings);