// This is just a code for a place to start
var genBtn = $('#genBtn');
var checkedEl = $('input:checked');

function getApi() {
    var backgroundApi = `https://php-noise.com/noise.php?r=${r}&g=${g}&b=${b}&tiles=${tiles}&tileSize=${tileSize}&borderWidth=${borderWidth}&mode=${mode}&json`;
    var emojiApi = 'https://emojihub.yurace.pro/api/random/category/smileys-and-people'
  
    fetch(backgroundApi)
      .then(function (response) {
        return response.json();
      })
      .then(function (data) {
        for (var i = 0; i < data.length; i++) {
          console.log("Test")
        }
      });

      fetch(emojiApi)
      .then(function (response) {
        return response.json();
      })
      .then(function (data) {
        for (var i = 0; i < data.length; i++) {
          console.log("Test2")
        }
      });
  }
  
  genBtn.on('click', getApi);