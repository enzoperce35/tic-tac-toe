const gameMessage = (() => {

  // cached DOM
  const userName  = document.querySelectorAll(".input-wrap");
  const roundMsg  = document.getElementById("round-num");
  const turnMsg   = document.getElementById("turnplayer");
  const scoreCont = document.getElementsByClassName("score");


  // events
  events.on("gameStart", displayName)
  events.on("roundOver", displayWin, displayScores)
  events.on("gameOver", displayGameResult)
  events.on("startRound", displayTurn, displayRound, displayScores)
  events.on("nextTurn", displayTurn, displayRound)


  // functions
  function displayName() {
    for(i=0; i<userName.length; i++) {
      let userInput = userName[i]

      userInput.firstElementChild.remove()

      userInput.innerText = players.getPlayers()[i].getName()
    }
  }

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
    let drawRound = (winner == 'none')

    let winMsg = `<em style="color: mediumpurple"> ${ (drawRound) ? '' : winner.getName() }<em>
                  <em style="color: black">takes</em>
                  <em style="color: mediumpurple"> round ${roundCount}</em>`

    setTimeout( function() {
      turnMsg.innerHTML = (drawRound) ? 'Draw' : winMsg;
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
