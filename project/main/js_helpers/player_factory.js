const Player = (playerName, index) => {

  // variables
  let name  = playerName;
  let piece = index == 0 ? "/project/images/alpha-x.svg" : "/project/images/alpha-o.svg";
  let tiles = [];
  let score = 0;
  let winComb  = '';


  // functions
  function getScore() {
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

  function changeName(newName){
    name = newName
  }

  return { changeName,
           getName,
           getPiece,
           getTiles,
           tiles,
           resetTiles,
           getScore,
           addScore,
           addPiece,
           winComb };
};
