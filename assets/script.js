// This is just a code for a place to start
var genButton = $("#genBtn");
var checkedEl = $('input:checked');
var tiles = $('#parameter1');
var tileSize = $('#parameter2');
var r = $('#parameter3');
var g = $('#parameter4');
var b = $('#parameter5');

function getApi() {
  var backgroundApi = `https://php-noise.com/noise.php?r=${r}&g=${g}&b=${b}&tiles=${tiles}&tileSize=${tileSize}&json`;
  var emojiApi = 'https://emojihub.yurace.pro/api/random/category/smileys-and-people';
  
  fetch(backgroundApi)
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    for (var i = 0; i < data.length; i++) {
      console.log("Test");
    }
  });

  fetch(emojiApi)
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    for (var i = 0; i < data.length; i++) {
      console.log("Test2");
    }
  });
  generateParameters();
}

function generateParameters() {
  
}
genButton.on('click', getApi);