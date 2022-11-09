let player1Score = parseInt(localStorage.getItem('saved-p1-score'));
let player2Score = parseInt(localStorage.getItem('saved-p2-score'));
let player3Score = parseInt(localStorage.getItem('saved-p3-score'));

let p1Score = document.getElementById('p1-score');
let p2Score = document.getElementById('p2-score');
let p3Score = document.getElementById('p3-score');

let winner = document.getElementById('announce-winner-if-exists');

function checkWinner() {
    if (player1Score + player2Score + player3Score !== 9) {
        winner.innerText = "There is no winner! The results don't add up to 9. " +
            "Who will be the winner? Play the game to find out!";
    }
    else if (player1Score > player2Score && player1Score > player3Score) {
        winner.innerText = "Player 1 is the winner!";
    }
    else if (player2Score > player1Score && player2Score > player3Score) {
        winner.innerText = "Player 2 is the winner!";
    }
    else if (player3Score > player1Score && player3Score > player2Score) {
        winner.innerText = "Player 3 is the winner!";
    }
    else if (player1Score === 3 && player2Score === 3 && player3Score === 3) {
        winner.innerText = "There has been a three way tie!";
    }
    else if (player1Score === player2Score) {
        winner.innerText = "There has been a tie between player 1 and player 2. Better luck next time Player 3";
    }
    else if (player2Score === player3Score) {
        winner.innerText = "There has been a tie between player 2 and player 3. Better luck next time Player 1";
    }
    else if (player1Score === player3Score) {
        winner.innerText = "There has been a tie between player 1 and player 3. Better luck next time Player 2";
    }
}

function updatePlayersScore() {
    p1Score.innerHTML = "<b>Player 1 total score:</b> <br>" + player1Score;
    p2Score.innerHTML = "<b>Player 2 total score:</b> <br>" + player2Score;
    p3Score.innerHTML = "<b>Player 3 total score:</b> <br>" + player3Score;
}

function restartScores() {
    p1Score.innerHTML = "<b>Player 1 total score:</b> <br>" + 0;
    p2Score.innerHTML = "<b>Player 2 total score:</b> <br>" + 0;
    p3Score.innerHTML = "<b>Player 3 total score:</b> <br>" + 0;
    winner.innerText = "There is no winner! The results don't add up to 9. " +
        "Who will be the winner? Play the game to find out!";
}

function updateResults() {
    updatePlayersScore();
    checkWinner()
}
updateResults();
