const game = (() => {

  // variables
  const gameOver = () => {
    let roundLimitReached = (() => roundCount == 3 && roundClosed())();

    let targetScoreReached = (() => players.getScores().some((e) => e >= 5))();

    return roundLimitReached || targetScoreReached
  };

  const gameWinner = () => {
    let scores = players.getScores()

    if (scores[0] > scores[1]) { return players.p1 }

    if (scores[0] < scores[1]) { return players.p2 };

    return
  }

  const roundClosed = () => {
    return (round == '') ? true : round.closed
  }


  // events
  events.on("startRound", setRound)
  events.on("turnWasMade", checkRound, checkGame, nextTurn)


  // functions
  function setRound() {
    ++roundCount

    round = Round()
  };

  function checkRound() {
    if (round.roundOver()) {
      round.close()

      events.emit('roundOver', round.getWinner())
    }
  }

  function checkGame() {
    if (gameOver()) {
      events.emit('gameOver', this)

      return
    }
  }

  function nextTurn() {
    if (roundClosed() || gameOver()){
      return
    }
    else {
      round.addTurn()

      events.emit("nextTurn")
    }
  }

  return {gameWinner, roundClosed}

})();
