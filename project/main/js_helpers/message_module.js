const gameMessage = (() => {

  // cached DOM
  const roundMsg  = document.getElementById("roundNum");
  const turnMsg   = document.getElementById("turnPlayer");
  const scoreCont = document.getElementsByClassName("score");


  // events
  events.on("roundOver", displayWin, displayScores)
  events.on("gameOver", displayGameResult)
  events.on("startRound", displayTurn, displayRound, displayScores)
  events.on("nextTurn", displayTurn, displayRound)


  // functions
  function displayGameResult() {
    roundMsg.innerHTML = "Game Over"

    setTimeout( function() {
      turnMsg.innerHTML = (() => {
        let winner = game.gameWinner()

        let drawGame = (() =>  winner == undefined )();

        return (drawGame) ? 'GAME IS DRAW' : winner.getName() + " Wins!"
      })();
    }, 100)
  }

  function displayWin(winner) {
    let winMsg = " takes round " + roundCount

    setTimeout( function() {
      turnMsg.innerHTML = (winner == 'none') ? 'Draw' : winner.getName() + winMsg;
    }, 50)
  }

  function displayTurn() {
    turnMsg.innerHTML = players.getTurnPlayer().getName() + "'s Turn"
  }

  function displayRound() {
    setTimeout( function() {
      roundMsg.innerHTML = "Round " + roundCount
    }, 100)
  }

  function displayScores() {

    setTimeout( function() {
      for(i=0; i<scoreCont.length; i++) {
        scoreCont[i].innerHTML = players.getPlayers()[i].getScore()
      }
    }, 300)
  }

})();
