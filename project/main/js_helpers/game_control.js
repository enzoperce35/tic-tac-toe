const gameButton = document.getElementById('gameBtn');

// start round
gameButton.addEventListener('click', () => {
  events.emit('startRound', true)

  hideControl()
});


// events
events.on("roundOver", showControl)
events.on("gameOver", hideControl)


// functions
function showControl() {
  gameButton.innerHTML = 'Next Round'

  gameButton.hidden = false;
}

function hideControl() {
  gameButton.hidden = true;
}
