const players = (() => {

  // cached dom
  const nameInput = document.querySelectorAll(".side-wings input");


  // variables
  const p1 = Player('PLAYER_1', 0);
  const p2 = Player('PLAYER_2', 1);
  let turnPlayer = p1;


  // events
  events.on('gameStart', setPlayerNames)
  events.on('startRound', logTurn, switchPlayer)
  events.on('turnWasMade', logTurn)
  events.on('nextTurn', switchPlayer)
  events.on('roundOver', clearPlayerTiles, addPlayerScore)


  // functions
  function setPlayerNames() {
    p1.changeName( nameInput[0].value )
    p2.changeName( nameInput[1].value )
  }

  function switchPlayer(roundStart) {
    turnPlayer = (roundStart || turnPlayer == p2) ? p1 : p2
  };

  function logTurn(tile) {
    turnPlayer.addPiece(tile.id)
  }

  function getPlayers(){
    return [this.p1, this.p2]
  }

  function getTurnPlayer() {
    return turnPlayer
  }

  function getScores() {
    return [p1.getScore(), p2.getScore()]
  }

  function addPlayerScore(winner) {
    if (winner != 'none') winner.addScore()
  }

  function clearPlayerTiles() {
    [p1, p2].forEach((p) => p.resetTiles())
  }

  return { p1,
           p2,
           getPlayers,
           getTurnPlayer,
           switchPlayer,
           getScores }

})();
