// cached dom
const gameButton = document.getElementById('game-btn');
const roundNum   = document.getElementById('round-num');


// start round
gameButton.addEventListener('click', () => {
  if (roundCount == 0) events.emit('gameStart');

  events.emit('startRound', true)

  hideControl()
});


// events
events.on("roundOver", showControl)
events.on("gameOver", hideControl)


// functions
function showControl() {
  gameButton.innerHTML = 'Next Round'

  roundNum.hidden = true

  gameButton.hidden = false
}

function hideControl() {
  gameButton.hidden = true

  roundNum.hidden = false
}
