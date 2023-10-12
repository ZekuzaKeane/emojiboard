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

genButton.on('click', getApi);

function getApi(event) {
 event.preventDefault()
  var r = red.val();
  var b = blue.val();
  var g = green.val();
  var tiles = numTiles.val();
  var tileSize = tSize.val();
  var backgroundApi = `https://php-noise.com/noise.php?r=${r}&g=${g}&b=${b}&tiles=${tiles}&tileSize=${tileSize}&json`; 
  
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
    
  getEmojiApi();
};

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

function displayStorage(event) {
    var backgroundData = JSON.parse(localStorage.getItem('backgroundData'));
    var emojiData = JSON.parse(localStorage.getItem('emojiData'));
    
    if (backgroundData && emojiData) {
      $('#history').empty()
      var overFlow = 0
      var storedData = $('<p>').text("Background: " + backgroundData.uri);
      var storedData2 = $('<p>').text("Emoji Unicode: " + emojiData.unicode);
      $('#history').append(storedData);
      $('#history').append(storedData2);
    }

    if (overFlow >= 2){
      $('#history').innerHTML
    }
  };