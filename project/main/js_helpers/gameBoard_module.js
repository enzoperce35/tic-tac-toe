const gameBoard = (() => {

  // cached dom
  const boardTiles = document.querySelectorAll(".gameboard ul li");


  // events
  events.on("startRound", clearBoard, openGameBoard)
  events.on("roundOver", highlightWin, closeGameBoard)


  // functions
  function openGameBoard() {
    for (i=0; i<boardTiles.length; i++) {
      boardTiles[i].addEventListener( 'click', occupyBoardTile );
    };
  }

  function closeGameBoard() {
    for (i=0; i<boardTiles.length; i++) {
      boardTiles[i].removeEventListener( 'click', occupyBoardTile );
    };
  }

  function occupyBoardTile() {
    const object = document.createElement('object')

    object.data = players.getTurnPlayer().getPiece()

    this.appendChild(object)

    this.removeEventListener('click', occupyBoardTile)

    events.emit('turnWasMade', this)
  }

  function clearBoard() {
    for(i=0; i<boardTiles.length; i++) {
      let tile = boardTiles[i]

      tile.innerText = '';

      tile.style = "background-color: white"
    }
  }

  function highlightWin(winner) {
    if (winner == 'none') return

    let winComb = winner.winComb

    let winCombs = document.querySelectorAll(`#${winComb[0]}, #${winComb[1]}, #${winComb[2]}`);

    for(i=0; i<winCombs.length; i++) {
       winCombs[i].style = "background-color: gold"
    }
  }

})();
