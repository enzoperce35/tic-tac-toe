const Round = () => {

  // variables
  let turnCount = 0;
  let closed    = false;
  let winner    = 'none';
  let winCombs  = [['a1', 'a2', 'a3'], ['b1', 'b2', 'b3'], ['c1', 'c2', 'c3'],
                   ['a1', 'b1', 'c1'], ['a2', 'b2', 'c2'], ['a3', 'b3', 'c3'],
                   ['a1', 'b2', 'c3'], ['c1', 'b2', 'a3'], ['c1', 'c2', 'c3']]


  // functions
  function close() {
    this.closed = true
  }

  function roundIsDraw() {
    return turnCount == 8
  }

  function tile(e) {
    return players.getTurnPlayer().getTiles().includes(e)
  }

  function turnPlayerWin() {
    let i = 0;

    while (i<winCombs.length) {
      if (winCombs[i].every( tile )) {
        winner = players.getTurnPlayer()

        return true
      }; i++;
    }

    return false
  }

  function roundOver() {
    return turnPlayerWin() || roundIsDraw()
  }

  function getWinner() {
    return winner
  }

  function addTurn() {
    turnCount++
  }

  return {roundOver, close, closed, getWinner, addTurn}
};
