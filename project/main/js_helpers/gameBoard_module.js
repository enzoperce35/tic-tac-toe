const gameBoard = (() => {

  // board
  const boardTiles = document.querySelectorAll(".game_board ul li");


  // events
  events.on("startRound", openGameBoard)
  events.on("roundOver", clearBoard, closeGameBoard)


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
    this.innerText = players.getTurnPlayer().getPiece()

    this.removeEventListener('click', occupyBoardTile)

    events.emit('turnWasMade', this)
  }


  // functions
  function clearBoard() {
    for(i=0; i<boardTiles.length; i++) {
      boardTiles[i].innerText = '';
    }
  }
})();
