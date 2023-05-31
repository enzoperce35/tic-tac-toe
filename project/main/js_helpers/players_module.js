const players = (() => {
  const nameInput = document.querySelectorAll(".players input");

  const p1 = Player(nameInput[0].value, 0);
  const p2 = Player(nameInput[1].value, 1);

  events.on('startRound', logTurn, switchPlayer)
  events.on('turnWasMade', logTurn)
  events.on('nextTurn', switchPlayer)
  events.on('roundOver', clearPlayerTiles, addPlayerScore)

  let turnPlayer = p1;

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

  return { getPlayers, p1, p2, getTurnPlayer, switchPlayer, getScores }

})();
