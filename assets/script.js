var genButton = $("#genBtn");
var image = $("#imageResults")
var tiles = $('#parameter1');
var tileSize = $('#parameter2');
var genResults = $('#genResults');
var red = $('#parameter3');
var blue = $('#parameter4');
var green = $('#parameter5');
var numTiles = $('#parameter1');
var tSize = $('#parameter2');
// Generate button launches getApi function
genButton.on('click', getApi);
// Function takes in number values and deposits them into link to call php-noise API
function getApi() {
  var r = red.val();
  var b = blue.val();
  var g = green.val();
  var tiles = numTiles.val();
  var tileSize = tSize.val();
  var backgroundApi = `https://php-noise.com/noise.php?r=${r}&g=${g}&b=${b}&tiles=${tiles}&tileSize=${tileSize}&json`; 
// Data is logged in console and then is saved to local storage before being rendered in the HTML container. 
  fetch(backgroundApi)
  .then(function (response) {
    console.log(response.status)
    console.log(response)
    return response.json();
  })
  .then(function (data) {
    localStorage.setItem('backgroundData', JSON.stringify(data));
    var imageResults = document.getElementById('imageResults');
    imageResults.src = data.uri;
  })
.catch(function (error) {
    console.error('Error:', error);
  });
// After the function is through, the next API, emojihub, is called.
  getEmojiApi();
};
// The data is logged, saved to local storage and rendered on the page similar to php-noise.
function getEmojiApi() {

  var emojiApi = 'https://emojihub.yurace.pro/api/random/category/smileys-and-people'

  fetch(emojiApi)
    .then(function (response) {
      console.log(response.status)
      console.log(response)
      return response.json();
  })
    .then(function(data) {
      localStorage.setItem('emojiData', JSON.stringify(data));
      var emojiResults = document.getElementById('emoji');
      emojiResults.innerHTML = data.htmlCode.join('');
  })
  .catch(function(error) {
      console.error('Error:', error);
  });

   displayStorage();
  }
// Function to display data from the APIs including a link to the rendered background and unicode for the emoji.
function displayStorage() {
    var backgroundData = JSON.parse(localStorage.getItem('backgroundData'));
    var emojiData = JSON.parse(localStorage.getItem('emojiData'));
    
    if (backgroundData && emojiData) {
      $('#history').empty()
      var storedData = $('<p>').text("Background: " + backgroundData.uri);
      var storedData2 = $('<p>').text("Emoji Unicode: " + emojiData.unicode);
      $('#history').append(storedData);
      $('#history').append(storedData2);
    }
  };