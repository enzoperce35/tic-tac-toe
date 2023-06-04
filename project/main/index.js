//global variables
let round = '';
let roundCount = 0;


// this is file concatination; all project js files are added in a single js file.
function include(file) {
  var script = document.createElement('script');
  script.src = file;
  script.type = 'text/javascript';
  script.defer = true;
  document.getElementsByTagName('head').item(0).appendChild(script);
}

include('/project/main/js_helpers/pub_sub.js');
include('/project/main/js_helpers/player_factory.js');
include('/project/main/js_helpers/players_module.js');
include('/project/main/js_helpers/round_factory.js');
include('/project/main/js_helpers/game_module.js');
include('/project/main/js_helpers/message_module.js');
include('/project/main/js_helpers/gameBoard_module.js');
include('/project/main/js_helpers/game_control.js');
