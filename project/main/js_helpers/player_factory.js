const Player = (playerName, index) => {
  const name  = playerName;
  const piece = index == 0 ? "X" : "O";

  let tiles = [];
  let score = 0;

  const getScore = () => {
    return score
  }

  function addScore() {
    score++
  }

  function getPiece() {
    return piece
  }

  function addPiece(piece) {
    this.tiles.push(piece)
  }

  function resetTiles() {
    while(this.tiles.length > 0) {
      this.tiles.pop()
    }
  }

  function getName() {
    return name
  }

  function getTiles() {
    return tiles
  }

  return { getName, getPiece, getTiles, tiles, resetTiles, getScore, addScore, addPiece };
};


